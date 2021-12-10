const pg = require('pg')

const pool = new pg.Pool()

/**
 * Run query and return all results as array
 */
async function query(query, params) {
    return (await pool.query(query, params)).rows
}

/**
 * Run query and return one result. If query gives multiple or no results, throw error
 */
async function queryOne(query, params) {
    const rows = (await pool.query(query, params)).rows
    if (rows.length === 1) {
        return rows[0]
    } else {
        throw new Error(`Expected exactly 1 result for query, got ${rows.length}`)
    }
}

module.exports = { query, queryOne }