use sqlx::{FromRow, PgPool, Error};
use chrono::NaiveDateTime; // For handling TIMESTAMP fields

#[derive(Debug, FromRow)]
pub struct AlertWarning {
    pub alert_id: i32,
    pub system_id: i32,
    pub date_time: NaiveDateTime,
    pub alert_type: String,
    pub description: String,
    pub status: String,
}

impl AlertWarning {
    // Fetch all alerts and warnings
    pub async fn fetch_all(pool: &PgPool) -> Result<Vec<AlertWarning>, Error> {
        sqlx::query_as::<_, AlertWarning>("SELECT * FROM alerts_warnings")
            .fetch_all(pool)
            .await
    }

    // Fetch a specific alert by its ID
    pub async fn fetch_by_id(pool: &PgPool, id: i32) -> Result<AlertWarning, Error> {
        sqlx::query_as::<_, AlertWarning>("SELECT * FROM alerts_warnings WHERE alert_id = $1")
            .bind(id)
            .fetch_one(pool)
            .await
    }

    // Insert a new alert
    pub async fn insert(pool: &PgPool, new_alert: NewAlert) -> Result<i32, Error> {
        let result = sqlx::query!(
            r#"
            INSERT INTO alerts_warnings (system_id, date_time, alert_type, description, status)
            VALUES ($1, $2, $3, $4, $5)
            RETURNING alert_id
            "#,
            new_alert.system_id, new_alert.date_time, new_alert.alert_type, new_alert.description, new_alert.status
        )
        .fetch_one(pool)
        .await?;

        Ok(result.alert_id)
    }
}

// Struct for inserting a new alert
pub struct NewAlert {
    pub system_id: i32,
    pub date_time: NaiveDateTime,
    pub alert_type: String,
    pub description: String,
    pub status: String,
}
