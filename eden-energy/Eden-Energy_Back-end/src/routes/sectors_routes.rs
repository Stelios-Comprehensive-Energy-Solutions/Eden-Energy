use warp::{Filter, Rejection, Reply};
use crate::db::models::sectors::{get_all_sectors, Sector};
use crate::db::conn::create_db_pool;
use std::convert::Infallible;

// Define our routes
pub fn sectors_routes() -> impl Filter<Extract = impl Reply, Error = Rejection> + Clone {
    get_sectors()
}

// Define the GET /sectors route
fn get_sectors() -> impl Filter<Extract = impl Reply, Error = Rejection> + Clone {
    warp::path!("sectors")
        .and(warp::get())
        .and_then(handle_get_sectors)
}

// Handler for the GET /sectors route
async fn handle_get_sectors() -> Result<impl Reply, Rejection> {
    let pool = create_db_pool().await.expect("Failed to create DB pool");
    match get_all_sectors(&pool).await {
        Ok(sectors) => Ok(warp::reply::json(&sectors)),
        Err(_) => Err(warp::reject::not_found()),
    }
}
