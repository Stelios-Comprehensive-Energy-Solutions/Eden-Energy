use std::env;

// Configuration struct to hold our settings
pub struct Config {
    pub database_url: String,
    // Add other configuration fields as needed
}

impl Config {
    // Function to load our configuration from environment variables
    pub fn from_env() -> Self {
        let database_url = env::var("DATABASE_URL")
            .expect("DATABASE_URL must be set in the environment or .env file");

        // If you add more configuration fields, make sure to load them here

        Config { database_url }
    }
}
