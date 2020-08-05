const express = require('express');
const router = express.Router();
const Blog = require('./models/Blog');

router.get('/get-all', (req, res) => {
  Blog.find().then((foundBlog) => {
    res.json({ foundBlog });
  });
});
router.get('/get-single/:id', (req, res) => {
  Blog.findOne({ _id: req.params.id }).then((foundBlog) => {
    res.json({ foundBlog });
  });
});
router.post('/create-blog', (req, res) => {
  const blog = new Blog();
  blog.title = req.body.title;
  blog.author = req.body.author;
  blog.subject = req.body.subject;
  blog.article = req.body.article;
  blog.save().then((newBlog) => {
    res.json({ newBlog });
  });
});


router.put('/update-blog/:id', (req, res) => {
  Blog.findOne({ _id: req.params.id }).then((foundBlog) => {
    foundBlog.title = req.body.title;
    foundBlog.author = req.body.author;
    foundBlog.subject = req.body.subject;
    foundBlog.article = req.body.article;
    foundBlog.save().then((foundBlog) => {
      res.json({ message: 'updated', foundBlog });
    });
  });
});

router.delete('/delete/:id', (req, res) => {
  Blog.deleteOne({ _id: req.params.id }).then((foundBlog) => {
    res.json({ message: 'blog deleted' });
  });
});

module.exports = router;
