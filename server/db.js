const Pool = require("pg").Pool;

const pool = new Pool({
    user: "postgres",
    password: "27892789",
    host: "localhost",
    port: 5432,
    database: "jwttutorial"
});

module.exports = pool;