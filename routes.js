const express = require('express')
const asyncHandler = require('express-async-handler')
const db = require('./db')

const routes = express.Router()

routes.get('/', asyncHandler(async (req, res) => {
    const posts = await db.query('SELECT * FROM posts')
    res.render('posts', { posts })
}))

routes.get('/singlepost/:id', asyncHandler(async (req, res) => {
    const post = await db.queryOne('SELECT * FROM posts WHERE id = $1', [req.params.id])
    res.render('singlepost', { post })
}))

routes.get('/addnewpost', asyncHandler(async (req, res) => res.render('addnewpost')))

routes.post('/addnewpost', asyncHandler(async (req, res) => {
    // TODO: Read form data and add post
    res.render('message', { title: 'Post added', message: 'Successfully added new post' })
}))

routes.post('/likepost/:id', asyncHandler(async (req, res) => {
    const newValue = await db.queryOne('UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING likes', [req.params.id])
    res.send(newValue)
}))

module.exports = routes
