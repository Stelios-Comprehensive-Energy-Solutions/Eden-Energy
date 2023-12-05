use sqlx::{FromRow, PgPool, Error};
use serde::Serialize;

// Define the Product struct that corresponds to the products table in the database.
#[derive(Debug, Serialize, FromRow)]
pub struct Product {
    pub product_id: i32,
    pub product_name: String,
    pub category_id: i32,
    pub product_type: String,
    pub description: Option<String>,
    pub capacity: f64,
    pub dimensions: String,
    pub price: f64,
    pub warranty_period: i32,
    pub created_at: chrono::NaiveDateTime,
    pub updated_at: chrono::NaiveDateTime,
}

impl Product {
    // Fetch all products from the database.
    pub async fn fetch_all(pool: &PgPool) -> Result<Vec<Product>, Error> {
        sqlx::query_as::<_, Product>("SELECT * FROM products")
            .fetch_all(pool)
            .await
    }

    // Fetch a single product by its ID.
    pub async fn fetch_by_id(id: i32, pool: &PgPool) -> Result<Product, Error> {
        sqlx::query_as::<_, Product>("SELECT * FROM products WHERE product_id = $1")
            .bind(id)
            .fetch_one(pool)
            .await
    }

    // Insert a new product into the database.
    // Note: In a real-world scenario, you'd likely want to use a separate struct for inserts to avoid inserting IDs or timestamps manually.
    pub async fn insert(new_product: NewProduct, pool: &PgPool) -> Result<Product, Error> {
        sqlx::query_as::<_, Product>(
            "INSERT INTO products (product_name, category_id, product_type, description, capacity, dimensions, price, warranty_period, created_at, updated_at) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *"
        )
        .bind(&new_product.product_name)
        .bind(new_product.category_id)
        .bind(&new_product.product_type)
        .bind(&new_product.description)
        .bind(new_product.capacity)
        .bind(&new_product.dimensions)
        .bind(new_product.price)
        .bind(new_product.warranty_period)
        .bind(chrono::Utc::now().naive_utc())
        .bind(chrono::Utc::now().naive_utc())
        .fetch_one(pool)
        .await
    }
}

// Struct for inserting a new product.
#[derive(Debug, Serialize)]
pub struct NewProduct {
    pub product_name: String,
    pub category_id: i32,
    pub product_type: String,
    pub description: Option<String>,
    pub capacity: f64,
    pub dimensions: String,
    pub price: f64,
    pub warranty_period: i32,
}
