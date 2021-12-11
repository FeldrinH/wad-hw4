const express = require('express')
const asyncHandler = require('express-async-handler')
const db = require('./db')

const routes = express.Router()

routes.get('/', asyncHandler(async (req, res) => {
    const posts = await db.query('SELECT * FROM posts ORDER BY time_posted DESC')
    res.render('posts', { posts })
}))

routes.get('/singlepost/:id', asyncHandler(async (req, res) => {
    const post = await db.queryOne('SELECT * FROM posts WHERE id = $1', [req.params.id])
    res.render('singlepost', { post })
}))

routes.get('/addnewpost', asyncHandler(async (req, res) => res.render('addnewpost')))

routes.post('/addnewpost', asyncHandler(async (req, res) => {
    // TODO: Read form data and add post, then redirect to singlepost page for new post
    // NOTE: Use CURRENT_TIMESTAMP to get current time in sql query when adding post
}))

routes.post('/api/likepost/:id', asyncHandler(async (req, res) => {
    const newValue = await db.queryOne('UPDATE posts SET likes = likes + 1 WHERE id = $1 RETURNING likes', [req.params.id])
    res.send(newValue)
}))

routes.delete('/singlepost/:id', asyncHandler(async (req, res) => {
    try {
        const { id } = req.params;
        const deletepost = await db.query(
        "DELETE FROM posts WHERE id = $1", [id]
        );
        } catch (err) {
        console.error(err.message);
        }
}))

module.exports = routes
