use sqlx::{FromRow, PgPool, Error};
use serde::Serialize;

// Define the ProductCategory struct that corresponds to the product_categories table in the database.
#[derive(Debug, FromRow, Serialize)]
pub struct ProductCategory {
    pub category_id: i32,
    pub category_name: String,
}

// Functions associated with the ProductCategory model

/// Fetch all product categories from the database
pub async fn get_all_product_categories(pool: &PgPool) -> Result<Vec<ProductCategory>, Error> {
    let categories = sqlx::query_as::<_, ProductCategory>("SELECT * FROM product_categories")
        .fetch_all(pool)
        .await?;
    Ok(categories)
}

/// Fetch a specific product category by its ID
pub async fn get_product_category_by_id(pool: &PgPool, id: i32) -> Result<ProductCategory, Error> {
    let category = sqlx::query_as::<_, ProductCategory>("SELECT * FROM product_categories WHERE category_id = $1")
        .bind(id)
        .fetch_one(pool)
        .await?;
    Ok(category)
}

/// Insert a new product category into the database
pub async fn insert_product_category(pool: &PgPool, name: &str) -> Result<i32, Error> {
    let result = sqlx::query("INSERT INTO product_categories (category_name) VALUES ($1) RETURNING category_id")
        .bind(name)
        .fetch_one(pool)
        .await?;
    Ok(result.get(0))
}

/// Update a product category's name by its ID
pub async fn update_product_category(pool: &PgPool, id: i32, new_name: &str) -> Result<(), Error> {
    sqlx::query("UPDATE product_categories SET category_name = $1 WHERE category_id = $2")
        .bind(new_name)
        .bind(id)
        .execute(pool)
        .await?;
    Ok(())
}

/// Delete a product category by its ID
pub async fn delete_product_category(pool: &PgPool, id: i32) -> Result<(), Error> {
    sqlx::query("DELETE FROM product_categories WHERE category_id = $1")
        .bind(id)
        .execute(pool)
        .await?;
    Ok(())
}
