use sqlx::PgPool;
use std::env;

// This function creates a new database connection pool.
pub async fn create_db_pool() -> Result<PgPool, sqlx::Error> {
    // Load the DATABASE_URL from the environment variables.
    let database_url = env::var("DATABASE_URL")
        .expect("DATABASE_URL must be set in the environment or in the .env file");

    // Create a new connection pool and return it.
    PgPool::connect(&database_url).await
}
