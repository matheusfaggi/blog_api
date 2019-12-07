const { Router } = require('express')
const  UserController = require('./controllers/user-controller')
const  PostController = require('./controllers/post-controller')
const  LikeController = require('./controllers/like-controller')



const user = Router()
user.get('/', UserController.index)
user.post('/', UserController.store)
user.get('/:id', UserController.show)
user.get('/:id/posts', UserController.posts)
user.put('/:id', UserController.update)
user.delete('/:id', UserController.delete)
user.post('/:id/like',UserController.like)

const post = Router()
post.get('/', PostController.index)
post.post('/', PostController.store)
post.get('/:id', PostController.show)
post.put('/:id', PostController.update)
post.delete('/:id', PostController.delete)
post.post('/:id/like',PostController.like)
post.get('/:id/likes',PostController.likes)


const like = Router()
like.get('/', LikeController.index)
like.post('/', LikeController.store)
like.get('/:id', LikeController.show)
like.put('/:id', LikeController.update)
like.delete('/:id', LikeController.delete)

const router = Router()
router.use('/users',user)
router.use('/posts',post)
router.use('/likes',like)


module.exports = router