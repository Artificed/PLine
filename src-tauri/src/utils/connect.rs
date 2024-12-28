use mysql::{Error, OptsBuilder, Pool, PooledConn};

pub fn get_conn() -> Result<PooledConn, Error> {
    let username = String::from("root");
    let password = String::from("");
    let host = String::from("127.0.0.1");
    let port = 3306;
    let database = String::from("PLine");

    let opts = OptsBuilder::new()
        .user(Some(username))
        .pass(Some(password))
        .ip_or_hostname(Some(host))
        .tcp_port(port)
        .db_name(Some(database));
    let pool = Pool::new(opts)?;

    pool.get_conn()
}
