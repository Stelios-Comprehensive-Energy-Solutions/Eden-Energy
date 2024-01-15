use tokio_postgres::{NoTls, Client, Error};

pub async fn establish_connection() -> Result<Client, Error> {
    let (client, connection) =
        tokio_postgres::connect("host=localhost user=postgres dbname=edenenergy", NoTls).await?;

    tokio::spawn(async move {
        if let Err(e) = connection.await {
            eprintln!("connection error: {}", e);
        }
    });

    Ok(client)
}
