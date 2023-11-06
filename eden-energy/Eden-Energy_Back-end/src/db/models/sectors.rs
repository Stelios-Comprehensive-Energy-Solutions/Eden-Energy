use sqlx::{FromRow, PgPool, Error};
use serde::{Serialize, Deserialize};

// Define the Sector struct to represent rows in the sectors table.
#[derive(Debug, Serialize, Deserialize, FromRow)]
pub struct Sector {
    pub sector_id: i32,
    pub sector_name: String,
}

impl Sector {
    // Fetch all sectors from the database.
    pub async fn fetch_all(pool: &PgPool) -> Result<Vec<Sector>, Error> {
        sqlx::query_as::<_, Sector>("SELECT * FROM sectors")
            .fetch_all(pool)
            .await
    }

    // Fetch a single sector by its ID.
    pub async fn fetch_by_id(id: i32, pool: &PgPool) -> Result<Sector, Error> {
        sqlx::query_as::<_, Sector>("SELECT * FROM sectors WHERE sector_id = $1")
            .bind(id)
            .fetch_one(pool)
            .await
    }

    // Insert a new sector into the database.
    pub async fn create(name: &str, pool: &PgPool) -> Result<Sector, Error> {
        sqlx::query_as::<_, Sector>(
            "INSERT INTO sectors (sector_name) VALUES ($1) RETURNING sector_id, sector_name",
        )
        .bind(name)
        .fetch_one(pool)
        .await
    }

    // Update a sector's name by its ID.
    pub async fn update(id: i32, new_name: &str, pool: &PgPool) -> Result<Sector, Error> {
        sqlx::query_as::<_, Sector>(
            "UPDATE sectors SET sector_name = $1 WHERE sector_id = $2 RETURNING sector_id, sector_name",
        )
        .bind(new_name)
        .bind(id)
        .fetch_one(pool)
        .await
    }

    // Delete a sector by its ID.
    pub async fn delete(id: i32, pool: &PgPool) -> Result<u64, Error> {
        sqlx::query("DELETE FROM sectors WHERE sector_id = $1")
            .bind(id)
            .execute(pool)
            .await
    }
}
