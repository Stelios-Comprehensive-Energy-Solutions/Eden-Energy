use warp::Filter;
use dotenv::dotenv;
use std::env;

mod config;
mod db;
mod routes;

#[tokio::main]
async fn main() {
    // Load environment variables from .env
    dotenv().ok();

    // Set up the database pool
    let pool = db::conn::create_db_pool().await;

    // Set up routes
    let api = routes::all_routes(pool.clone());

    // Start the warp server
    warp::serve(api)
        .run(([127, 0, 0, 1], 3030))
        .await;
}

