const {Pool} = require('pg')

const pool = new Pool({
    host: "localhost",
    user: "postgres",
    password: "Ptomontt507",
    database: "likeme",
    allowExitOnIdLe: true
})

    async function connect() {
    const result = await pool.query("SELECT NOW()")    
    const hora = result.rows[0].now
    return hora


}

module.exports = {pool, connect}