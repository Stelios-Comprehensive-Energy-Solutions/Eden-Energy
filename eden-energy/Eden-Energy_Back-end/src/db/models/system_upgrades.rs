use sqlx::{FromRow, PgPool, Error};
use chrono::NaiveDate;

#[derive(Debug, FromRow)]
pub struct SystemUpgrade {
    pub upgrade_id: i32,
    pub system_id: i32,
    pub recommendation_date: NaiveDate,
    pub upgrade_description: String,
    pub status: String,
}

impl SystemUpgrade {
    // Fetch all system upgrades from the database
    pub async fn fetch_all(pool: &PgPool) -> Result<Vec<Self>, Error> {
        sqlx::query_as::<_, Self>("SELECT * FROM system_upgrades")
            .fetch_all(pool)
            .await
    }

    // Fetch a specific system upgrade by its ID
    pub async fn fetch_by_id(id: i32, pool: &PgPool) -> Result<Option<Self>, Error> {
        sqlx::query_as::<_, Self>("SELECT * FROM system_upgrades WHERE upgrade_id = $1")
            .bind(id)
            .fetch_optional(pool)
            .await
    }

    // Insert a new system upgrade into the database
    pub async fn insert(new_upgrade: NewSystemUpgrade, pool: &PgPool) -> Result<i32, Error> {
        let result = sqlx::query!(
            "INSERT INTO system_upgrades (system_id, recommendation_date, upgrade_description, status) VALUES ($1, $2, $3, $4) RETURNING upgrade_id",
            new_upgrade.system_id,
            new_upgrade.recommendation_date,
            new_upgrade.upgrade_description,
            new_upgrade.status
        )
        .fetch_one(pool)
        .await?;

        Ok(result.upgrade_id)
    }

    // Update a specific system upgrade's details
    pub async fn update(id: i32, updated_upgrade: NewSystemUpgrade, pool: &PgPool) -> Result<(), Error> {
        sqlx::query!(
            "UPDATE system_upgrades SET system_id = $2, recommendation_date = $3, upgrade_description = $4, status = $5 WHERE upgrade_id = $1",
            id,
            updated_upgrade.system_id,
            updated_upgrade.recommendation_date,
            updated_upgrade.upgrade_description,
            updated_upgrade.status
        )
        .execute(pool)
        .await?;

        Ok(())
    }

    // Delete a specific system upgrade by its ID
    pub async fn delete(id: i32, pool: &PgPool) -> Result<(), Error> {
        sqlx::query!("DELETE FROM system_upgrades WHERE upgrade_id = $1")
            .bind(id)
            .execute(pool)
            .await?;

        Ok(())
    }
}

// Struct for inserting and updating system upgrades
pub struct NewSystemUpgrade {
    pub system_id: i32,
    pub recommendation_date: NaiveDate,
    pub upgrade_description: String,
    pub status: String,
}
