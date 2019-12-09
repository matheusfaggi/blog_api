module.exports = {
    username: "postgres",
    password: "postgres",
    database: "blog_api",
    host: "db", //Nome(services) que definimos no docker-compose.yml 
    dialect: "postgres",
    define: {
        timestamp: true,
        underscored: true,
        underscoredAll: true
    }
}