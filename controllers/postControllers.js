const Post = require('../models/postModel')

exports.CreatePost = (req, res) => {
  const post = new Post({
    title: req.body.title,
    content: req.body.content,
  })
  post.save((err) => {
    if (err) {
      res.status(500).send({ message: err })
      return
    }
    res.send({ message: 'Post was created successfully!' })
  })
}

// Get a single Post with an id
exports.GetSinglePost = (req, res) => {
  const id = req.params.id
  Post.findById(id)
    .then((data) => {
      if (!data)
        res.status(404).send({ message: 'Not found Post with id ' + id })
      else res.send(data)
    })
    .catch((err) => {
      res.status(500).send({ message: 'Error retrieving Post with id=' + id })
    })
}

// Update a Post by the id in the request
exports.UpdatePost = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: 'Data to update can not be empty!',
    })
  }
  const id = req.params.id
  Post.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Post with id=${id}. Maybe Post was not found!`,
        })
      } else res.send({ message: 'Post was updated successfully.' })
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Error updating Post with id=' + id,
      })
    })
}

// Delete a Post with the specified id in the request
exports.DeletePost = (req, res) => {
  const id = req.params.id
  Post.findByIdAndRemove(id)
    .then((data) => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Post with id=${id}. Maybe Post was not found!`,
        })
      } else {
        res.send({
          message: 'Post was deleted successfully!',
        })
      }
    })
    .catch((err) => {
      res.status(500).send({
        message: 'Could not delete Post with id=' + id,
      })
    })
}

//Get all posts
exports.GetAllPosts = (req, res) => {
  Post.find()
    .then((data) => {
      res.send(data)
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || 'Some error occurred while retrieving posts.',
      })
    })
}
