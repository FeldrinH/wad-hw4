const express = require('express')
const db = require('./db')

const routes = express.Router()

routes.get('/', async (req, res) => {
    const posts = await db.queryMultiple('SELECT * FROM posts')
    res.render('posts', { posts })
})

routes.get('/singlepost/:id', async (req, res) => {
    const post = await db.querySingle('SELECT * FROM posts WHERE id = $1', [req.params.id])
    res.render('singlepost', { post })
})

routes.get('/addnewpost', async (req, res) => res.render('addnewpost'))

module.exports = routes
