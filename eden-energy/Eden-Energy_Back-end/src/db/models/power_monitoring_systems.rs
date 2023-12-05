use sqlx::{FromRow, PgPool, Error};
use chrono::NaiveDate;

#[derive(Debug, FromRow)]
pub struct PowerMonitoringSystem {
    pub system_id: i32,
    pub user_id: i32,
    pub installation_date: NaiveDate,
    pub system_status: String,
}

impl PowerMonitoringSystem {
    // Fetch all power monitoring systems
    pub async fn fetch_all(pool: &PgPool) -> Result<Vec<Self>, Error> {
        sqlx::query_as::<_, Self>("SELECT * FROM power_monitoring_systems")
            .fetch_all(pool)
            .await
    }

    // Fetch a specific power monitoring system by its ID
    pub async fn fetch_by_id(pool: &PgPool, system_id: i32) -> Result<Option<Self>, Error> {
        sqlx::query_as::<_, Self>("SELECT * FROM power_monitoring_systems WHERE system_id = $1")
            .bind(system_id)
            .fetch_optional(pool)
            .await
    }

    // Insert a new power monitoring system
    pub async fn insert(pool: &PgPool, system: &NewPowerMonitoringSystem) -> Result<i32, Error> {
        let result = sqlx::query!(
            "INSERT INTO power_monitoring_systems (user_id, installation_date, system_status) VALUES ($1, $2, $3) RETURNING system_id",
            system.user_id,
            system.installation_date,
            system.system_status
        )
        .fetch_one(pool)
        .await?;

        Ok(result.system_id)
    }

    // Update a power monitoring system's status
    pub async fn update_status(pool: &PgPool, system_id: i32, new_status: &str) -> Result<(), Error> {
        sqlx::query!(
            "UPDATE power_monitoring_systems SET system_status = $1 WHERE system_id = $2",
            new_status,
            system_id
        )
        .execute(pool)
        .await?;

        Ok(())
    }

    // Delete a power monitoring system by its ID
    pub async fn delete_by_id(pool: &PgPool, system_id: i32) -> Result<u64, Error> {
        let rows_affected = sqlx::query!(
            "DELETE FROM power_monitoring_systems WHERE system_id = $1",
            system_id
        )
        .execute(pool)
        .await?;

        Ok(rows_affected.rows_affected())
    }
}

// Struct for inserting a new power monitoring system
pub struct NewPowerMonitoringSystem {
    pub user_id: i32,
    pub installation_date: NaiveDate,
    pub system_status: String,
}
