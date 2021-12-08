const pg = require('pg')

const pool = new pg.Pool()

async function queryMultiple(query, params) {
    return (await pool.query(query, params)).rows
}

async function querySingle(query, params) {
    const rows = (await pool.query(query, params)).rows
    if (rows.length === 0) {
        return null
    } else if (rows.length === 1) {
        return rows[0]
    } else {
        throw new Error(`Expected at most one result for query, got ${rows.length}`)
    }
}

module.exports = { querySingle, queryMultiple }