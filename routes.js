const express = require('express')
const asyncHandler = require('express-async-handler')
const db = require('./db')

const routes = express.Router()

routes.get('/', asyncHandler(async (req, res) => {
    const posts = await db.queryMultiple('SELECT * FROM posts')
    res.render('posts', { posts })
}))

routes.get('/singlepost/:id', asyncHandler(async (req, res) => {
    const post = await db.querySingle('SELECT * FROM posts WHERE id = $1', [req.params.id])
    res.render('singlepost', { post })
}))

routes.get('/addnewpost', asyncHandler(async (req, res) => res.render('addnewpost')))

module.exports = routes
