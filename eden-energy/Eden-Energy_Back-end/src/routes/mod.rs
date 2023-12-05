use warp::Filter;
use crate::db::conn::create_db_pool;

// Import all route modules
mod sectors_routes;
mod product_categories_routes;
mod product_features_routes;
mod installations_routes;
mod users_routes;
mod products_routes;
mod sales_orders_routes;
mod rental_contracts_routes;
mod power_provision_routes;
mod billing_routes;
mod power_monitoring_systems_routes;
mod power_usage_logs_routes;
mod alerts_warnings_routes;
mod system_upgrades_routes;

// Combine all routes into a single filter
pub fn all_routes() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    sectors_routes()
        .or(product_categories_routes())
        .or(product_features_routes())
        .or(installations_routes())
        .or(users_routes())
        .or(products_routes())
        .or(sales_orders_routes())
        .or(rental_contracts_routes())
        .or(power_provision_routes())
        .or(billing_routes())
        .or(power_monitoring_systems_routes())
        .or(power_usage_logs_routes())
        .or(alerts_warnings_routes())
        .or(system_upgrades_routes())
}

// Define the sectors routes
fn sectors_routes() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    warp::path("sectors")
        .and(
            warp::get()
                .and_then(sectors_routes::handle_get_sectors)
                .or(warp::post()
                    .and_then(sectors_routes::handle_create_sector))
        )
}

// Define routes for other tables in a similar manner
// For brevity, I'll show one more example:

fn product_categories_routes() -> impl Filter<Extract = impl warp::Reply, Error = warp::Rejection> + Clone {
    warp::path("product_categories")
        .and(
            warp::get()
                .and_then(product_categories_routes::handle_get_product_categories)
                .or(warp::post()
                    .and_then(product_categories_routes::handle_create_product_category))
        )
}

// ... Continue in a similar manner for other routes ...

