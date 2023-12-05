use sqlx::{FromRow, PgPool, Error};
use serde::Serialize;

// Define the ProductFeature struct that corresponds to the product_features table in the database.
#[derive(Debug, Serialize, FromRow)]
pub struct ProductFeature {
    pub feature_id: i32,
    pub product_id: i32,
    pub feature_description: String,
}

// Functions related to the ProductFeature model

/// Fetch all product features from the database.
pub async fn get_all_product_features(pool: &PgPool) -> Result<Vec<ProductFeature>, Error> {
    sqlx::query_as::<_, ProductFeature>("SELECT * FROM product_features")
        .fetch_all(pool)
        .await
}

/// Fetch a specific product feature by its ID.
pub async fn get_product_feature_by_id(pool: &PgPool, id: i32) -> Result<ProductFeature, Error> {
    sqlx::query_as::<_, ProductFeature>("SELECT * FROM product_features WHERE feature_id = $1")
        .bind(id)
        .fetch_one(pool)
        .await
}

/// Insert a new product feature into the database.
pub async fn insert_product_feature(pool: &PgPool, product_id: i32, description: &str) -> Result<i32, Error> {
    let result = sqlx::query!("INSERT INTO product_features (product_id, feature_description) VALUES ($1, $2) RETURNING feature_id", product_id, description)
        .fetch_one(pool)
        .await?;

    Ok(result.feature_id)
}

/// Delete a product feature by its ID.
pub async fn delete_product_feature(pool: &PgPool, id: i32) -> Result<u64, Error> {
    sqlx::query!("DELETE FROM product_features WHERE feature_id = $1", id)
        .execute(pool)
        .await
}
