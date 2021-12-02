const Pool = require("pg").Pool;

module.exports = new Pool({
    user: "postgres",
    password: "2711",
    host: "localhost",
    port: 5000,//localhost db port
    database: "CovidManager",
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
      }
})
