use sqlx::{FromRow, PgPool, Error};
use chrono::NaiveDateTime; // For handling TIMESTAMP

#[derive(Debug, FromRow)]
pub struct SalesOrder {
    pub order_id: i32,
    pub user_id: i32,
    pub product_id: i32,
    pub installation_fee: f64,
    pub total_amount: f64,
    pub order_date: NaiveDateTime,
}

impl SalesOrder {
    // Fetch all sales orders
    pub async fn fetch_all(pool: &PgPool) -> Result<Vec<SalesOrder>, Error> {
        sqlx::query_as::<_, SalesOrder>("SELECT * FROM sales_orders")
            .fetch_all(pool)
            .await
    }

    // Fetch a specific sales order by ID
    pub async fn fetch_by_id(id: i32, pool: &PgPool) -> Result<SalesOrder, Error> {
        sqlx::query_as::<_, SalesOrder>("SELECT * FROM sales_orders WHERE order_id = $1")
            .bind(id)
            .fetch_one(pool)
            .await
    }

    // Insert a new sales order
    pub async fn insert(order: NewSalesOrder, pool: &PgPool) -> Result<i32, Error> {
        let mut tx = pool.begin().await?;
        let order_id: i32 = sqlx::query!("INSERT INTO sales_orders (user_id, product_id, installation_fee, total_amount, order_date) VALUES ($1, $2, $3, $4, $5) RETURNING order_id",
            order.user_id, order.product_id, order.installation_fee, order.total_amount, order.order_date)
            .fetch_one(&mut tx)
            .await?
            .order_id;
        tx.commit().await?;
        Ok(order_id)
    }

    // Update a sales order
    pub async fn update(id: i32, order: NewSalesOrder, pool: &PgPool) -> Result<bool, Error> {
        let rows_affected = sqlx::query!("UPDATE sales_orders SET user_id = $2, product_id = $3, installation_fee = $4, total_amount = $5, order_date = $6 WHERE order_id = $1",
            id, order.user_id, order.product_id, order.installation_fee, order.total_amount, order.order_date)
            .execute(pool)
            .await?
            .rows_affected();
        Ok(rows_affected > 0)
    }

    // Delete a sales order
    pub async fn delete(id: i32, pool: &PgPool) -> Result<bool, Error> {
        let rows_affected = sqlx::query!("DELETE FROM sales_orders WHERE order_id = $1")
            .bind(id)
            .execute(pool)
            .await?
            .rows_affected();
        Ok(rows_affected > 0)
    }
}

// Struct for inserting/updating sales orders
#[derive(Debug)]
pub struct NewSalesOrder {
    pub user_id: i32,
    pub product_id: i32,
    pub installation_fee: f64,
    pub total_amount: f64,
    pub order_date: NaiveDateTime,
}
