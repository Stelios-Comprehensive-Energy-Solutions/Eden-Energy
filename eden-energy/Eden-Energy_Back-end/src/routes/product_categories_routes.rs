use warp::Filter;
use crate::db::models::product_categories::{get_all_categories, ProductCategory};
use crate::db::conn::create_db_pool;

// Define the routes related to product categories
pub fn product_categories_routes() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    get_all_product_categories()
}

// Define the route to get all product categories
fn get_all_product_categories() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    warp::path!("product_categories")
        .and(warp::get())
        .and_then(handle_get_all_product_categories)
}

// Handler function for the GET /product_categories route
async fn handle_get_all_product_categories() -> Result<impl warp::Reply, warp::Rejection> {
    let pool = create_db_pool().await;
    match get_all_categories(&pool).await {
        Ok(categories) => Ok(warp::reply::json(&categories)),
        Err(_) => Err(warp::reject::not_found()), // In a real-world scenario, you'd want to handle different types of errors more gracefully.
    }
}
