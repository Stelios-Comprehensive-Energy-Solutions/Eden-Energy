#[macro_use] extern crate rocket;
mod db;

use db::establish_connection;

#[launch]
fn rocket() -> _ {
    rocket::ignite()
        .manage(establish_connection())
        // ... other configurations, routes, etc.
}
