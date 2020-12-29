const Posts = require("../models/Posts");
module.exports = {
  getAllPosts: async function (req, res) {
    try {
      const post = await Posts.find();

      res.status(200).json(post);
    } catch (error) {
      console.log(req.body);
      return res.status(400).json(error);
    }
  },
  createPost: async function (req, res) {
    try {
      const post = new Posts({
        title: req.body.title,
        content: req.body.content,
      });
      const savedPost = await post.save();
      res.status(200).json(savedPost);
    } catch (error) {
      console.log(req.body);
      return res.status(400).json(error);
    }
  },
  deletePost: async function (req, res) {
    try {
      await Posts.deleteOne({ _id: req.params.postId });
      res.json(req.params.postId);
    } catch (error) {
      console.log(error);
      return res.status(400).json(error);
    }
  },
  updatePost: async function (req, res) {
    try {
      const updatePost = await Posts.updateOne(
        { _id: req.params.postId },
        { title: req.body.title, content: req.body.content }
      );
      console.log(req.params.postId);
      console.log(req.body.title)
      res.json(updatePost);
    } catch (error) {
      console.log("error occured");
      return res.status(400).json(error);
    }
  },
};
