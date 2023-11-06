use sqlx::{FromRow, PgPool, Error};
use chrono::NaiveDate;

#[derive(Debug, FromRow)]
pub struct RentalContract {
    pub contract_id: i32,
    pub user_id: i32,
    pub product_id: i32,
    pub start_date: NaiveDate,
    pub end_date: NaiveDate,
    pub monthly_fee: f64,
}

impl RentalContract {
    // Fetch all rental contracts
    pub async fn fetch_all(pool: &PgPool) -> Result<Vec<RentalContract>, Error> {
        sqlx::query_as::<_, RentalContract>("SELECT * FROM rental_contracts")
            .fetch_all(pool)
            .await
    }

    // Fetch a specific rental contract by ID
    pub async fn fetch_by_id(id: i32, pool: &PgPool) -> Result<RentalContract, Error> {
        sqlx::query_as::<_, RentalContract>("SELECT * FROM rental_contracts WHERE contract_id = $1")
            .bind(id)
            .fetch_one(pool)
            .await
    }

    // Insert a new rental contract
    pub async fn insert(contract: &RentalContract, pool: &PgPool) -> Result<(), Error> {
        sqlx::query("INSERT INTO rental_contracts (user_id, product_id, start_date, end_date, monthly_fee) VALUES ($1, $2, $3, $4, $5)")
            .bind(&contract.user_id)
            .bind(&contract.product_id)
            .bind(&contract.start_date)
            .bind(&contract.end_date)
            .bind(&contract.monthly_fee)
            .execute(pool)
            .await?;
        Ok(())
    }

    // Update a rental contract by ID
    pub async fn update(id: i32, contract: &RentalContract, pool: &PgPool) -> Result<(), Error> {
        sqlx::query("UPDATE rental_contracts SET user_id = $1, product_id = $2, start_date = $3, end_date = $4, monthly_fee = $5 WHERE contract_id = $6")
            .bind(&contract.user_id)
            .bind(&contract.product_id)
            .bind(&contract.start_date)
            .bind(&contract.end_date)
            .bind(&contract.monthly_fee)
            .bind(id)
            .execute(pool)
            .await?;
        Ok(())
    }

    // Delete a rental contract by ID
    pub async fn delete(id: i32, pool: &PgPool) -> Result<(), Error> {
        sqlx::query("DELETE FROM rental_contracts WHERE contract_id = $1")
            .bind(id)
            .execute(pool)
            .await?;
        Ok(())
    }
}
