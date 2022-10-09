const express = require('express')
const router = express.Router()

const postController = require('../controllers/postControllers')

router.post('/create', postController.CreatePost)
router.get('/get/:id', postController.GetSinglePost)
router.put('/update/:id', postController.UpdatePost)
router.delete('/delete/:id', postController.DeletePost)
router.get('/getall', postController.GetAllPosts)

router.get('/', function (req, res) {
  Post.find({}, function (err, posts) {
    res.render('home', {
      startingContent: homec,
      posts: posts,
    })
  })
})

router.get('/compose', function (req, res) {
  res.render('compose')
})
router.get('/about', function (req, res) {
  res.render('about', { aboutContent: aboutc })
})

router.get('/contact', function (req, res) {
  res.render('contact', { contactContent: contactc })
})

router.post('/compose', function (req, res) {
  const post = new Post({
    title: req.body.postTitle,
    content: req.body.postBody,
  })

  post.save(function (err) {
    if (!err) {
      res.redirect('/')
    }
  })
})

router.get('/posts/:postId', function (req, res) {
  const requestedPostId = req.params.postId

  Post.findOne({ _id: requestedPostId }, function (err, post) {
    res.render('post', {
      title: post.title,
      content: post.content,
    })
  })
})

module.exports = router
