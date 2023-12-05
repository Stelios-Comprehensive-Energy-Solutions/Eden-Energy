use sqlx::{FromRow, PgPool, Error};
use serde::Serialize;

// Define the PowerProvision struct that matches the database table structure
#[derive(Debug, FromRow, Serialize)]
pub struct PowerProvision {
    pub log_id: i32,
    pub contract_id: i32,
    pub date_time: chrono::NaiveDateTime,
    pub power_provided: f64,
}

impl PowerProvision {
    // Fetch all power provisions from the database
    pub async fn fetch_all(pool: &PgPool) -> Result<Vec<Self>, Error> {
        sqlx::query_as::<_, Self>("SELECT * FROM power_provision")
            .fetch_all(pool)
            .await
    }

    // Fetch a specific power provision by its log_id
    pub async fn fetch_by_id(log_id: i32, pool: &PgPool) -> Result<Option<Self>, Error> {
        sqlx::query_as::<_, Self>("SELECT * FROM power_provision WHERE log_id = $1")
            .bind(log_id)
            .fetch_optional(pool)
            .await
    }

    // Insert a new power provision into the database
    pub async fn insert(new_provision: NewPowerProvision, pool: &PgPool) -> Result<Self, Error> {
        sqlx::query_as::<_, Self>(
            "INSERT INTO power_provision (contract_id, date_time, power_provided) VALUES ($1, $2, $3) RETURNING *"
        )
        .bind(new_provision.contract_id)
        .bind(new_provision.date_time)
        .bind(new_provision.power_provided)
        .fetch_one(pool)
        .await
    }

    // Delete a power provision by its log_id
    pub async fn delete(log_id: i32, pool: &PgPool) -> Result<u64, Error> {
        sqlx::query("DELETE FROM power_provision WHERE log_id = $1")
            .bind(log_id)
            .execute(pool)
            .await
    }
}

// Struct for inserting a new power provision
#[derive(Debug, Serialize)]
pub struct NewPowerProvision {
    pub contract_id: i32,
    pub date_time: chrono::NaiveDateTime,
    pub power_provided: f64,
}
