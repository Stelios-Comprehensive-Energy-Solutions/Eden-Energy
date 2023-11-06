use sqlx::{FromRow, PgPool, Error};
use serde::Serialize;

// Define the PowerUsageLog struct that corresponds to the power_usage_logs table
#[derive(Debug, Serialize, FromRow)]
pub struct PowerUsageLog {
    pub log_id: i32,
    pub system_id: i32,
    pub date_time: chrono::NaiveDateTime,
    pub voltage: f64,
    pub current: f64,
    pub wattage: f64,
    pub power_factor: f64,
}

impl PowerUsageLog {
    // Fetch all power usage logs
    pub async fn fetch_all(pool: &PgPool) -> Result<Vec<Self>, Error> {
        sqlx::query_as::<_, Self>("SELECT * FROM power_usage_logs")
            .fetch_all(pool)
            .await
    }

    // Fetch a specific power usage log by its ID
    pub async fn fetch_by_id(id: i32, pool: &PgPool) -> Result<Option<Self>, Error> {
        sqlx::query_as::<_, Self>("SELECT * FROM power_usage_logs WHERE log_id = $1")
            .bind(id)
            .fetch_optional(pool)
            .await
    }

    // Insert a new power usage log
    pub async fn insert(new_log: NewPowerUsageLog, pool: &PgPool) -> Result<Self, Error> {
        sqlx::query_as::<_, Self>(
            "INSERT INTO power_usage_logs (system_id, date_time, voltage, current, wattage, power_factor) 
             VALUES ($1, $2, $3, $4, $5, $6) RETURNING *")
            .bind(new_log.system_id)
            .bind(new_log.date_time)
            .bind(new_log.voltage)
            .bind(new_log.current)
            .bind(new_log.wattage)
            .bind(new_log.power_factor)
            .fetch_one(pool)
            .await
    }
}

// Struct for inserting a new power usage log
#[derive(Debug, Serialize)]
pub struct NewPowerUsageLog {
    pub system_id: i32,
    pub date_time: chrono::NaiveDateTime,
    pub voltage: f64,
    pub current: f64,
    pub wattage: f64,
    pub power_factor: f64,
}
