use sqlx::{FromRow, PgPool, Error};
use serde::Serialize;

// Define the User struct corresponding to the users table
#[derive(Debug, Serialize, FromRow)]
pub struct User {
    pub user_id: i32,
    pub username: String,
    pub email: String,
    pub password: String, // Note: In a real-world application, never store plain-text passwords!
    pub address: Option<String>,
    pub sector_id: Option<i32>,
    pub subscription_plan: Option<String>,
    pub created_at: chrono::NaiveDateTime,
    pub updated_at: Option<chrono::NaiveDateTime>,
}

impl User {
    // Fetch all users
    pub async fn fetch_all(pool: &PgPool) -> Result<Vec<User>, Error> {
        sqlx::query_as::<_, User>("SELECT * FROM users")
            .fetch_all(pool)
            .await
    }

    // Fetch a user by ID
    pub async fn fetch_by_id(id: i32, pool: &PgPool) -> Result<User, Error> {
        sqlx::query_as::<_, User>("SELECT * FROM users WHERE user_id = $1")
            .bind(id)
            .fetch_one(pool)
            .await
    }

    // Insert a new user (for simplicity, we're not handling password hashing here)
    pub async fn create(new_user: NewUser, pool: &PgPool) -> Result<User, Error> {
        sqlx::query_as::<_, User>(
            "INSERT INTO users (username, email, password, address, sector_id, subscription_plan, created_at)
             VALUES ($1, $2, $3, $4, $5, $6, NOW())
             RETURNING *")
            .bind(&new_user.username)
            .bind(&new_user.email)
            .bind(&new_user.password)
            .bind(&new_user.address)
            .bind(new_user.sector_id)
            .bind(&new_user.subscription_plan)
            .fetch_one(pool)
            .await
    }
}

// Struct for creating a new user
#[derive(Debug, Serialize)]
pub struct NewUser {
    pub username: String,
    pub email: String,
    pub password: String,
    pub address: Option<String>,
    pub sector_id: Option<i32>,
    pub subscription_plan: Option<String>,
}
