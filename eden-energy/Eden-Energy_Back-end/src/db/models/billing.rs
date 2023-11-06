use sqlx::{FromRow, PgPool, Error};
use serde::Serialize;

// Define the Billing struct that corresponds to the billing table in the database.
#[derive(Debug, FromRow, Serialize)]
pub struct Billing {
    pub bill_id: i32,
    pub user_id: i32,
    pub amount_due: f64,
    pub due_date: chrono::NaiveDate,  // Using chrono for date handling
    pub payment_status: String,
}

impl Billing {
    // Fetch all billing records
    pub async fn fetch_all(pool: &PgPool) -> Result<Vec<Billing>, Error> {
        sqlx::query_as::<_, Billing>("SELECT * FROM billing")
            .fetch_all(pool)
            .await
    }

    // Fetch a specific billing record by bill_id
    pub async fn fetch_by_id(bill_id: i32, pool: &PgPool) -> Result<Billing, Error> {
        sqlx::query_as::<_, Billing>("SELECT * FROM billing WHERE bill_id = $1")
            .bind(bill_id)
            .fetch_one(pool)
            .await
    }

    // Insert a new billing record
    pub async fn create(new_billing: NewBilling, pool: &PgPool) -> Result<Billing, Error> {
        sqlx::query_as::<_, Billing>(
            "INSERT INTO billing (user_id, amount_due, due_date, payment_status) VALUES ($1, $2, $3, $4) RETURNING *"
        )
        .bind(new_billing.user_id)
        .bind(new_billing.amount_due)
        .bind(new_billing.due_date)
        .bind(new_billing.payment_status)
        .fetch_one(pool)
        .await
    }

    // Update a billing record by bill_id
    pub async fn update(bill_id: i32, updated_billing: NewBilling, pool: &PgPool) -> Result<Billing, Error> {
        sqlx::query_as::<_, Billing>(
            "UPDATE billing SET user_id = $1, amount_due = $2, due_date = $3, payment_status = $4 WHERE bill_id = $5 RETURNING *"
        )
        .bind(updated_billing.user_id)
        .bind(updated_billing.amount_due)
        .bind(updated_billing.due_date)
        .bind(updated_billing.payment_status)
        .bind(bill_id)
        .fetch_one(pool)
        .await
    }

    // Delete a billing record by bill_id
    pub async fn delete(bill_id: i32, pool: &PgPool) -> Result<u64, Error> {
        sqlx::query("DELETE FROM billing WHERE bill_id = $1")
            .bind(bill_id)
            .execute(pool)
            .await
    }
}

// Struct for creating and updating billing records
#[derive(Debug, Serialize)]
pub struct NewBilling {
    pub user_id: i32,
    pub amount_due: f64,
    pub due_date: chrono::NaiveDate,
    pub payment_status: String,
}
