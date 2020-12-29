const mongoose = require("mongoose");


const PostsSchema = mongoose.Schema({
  title: {
    type: String
  }, 
  content: {
    type: String
  }

 
});

const Posts = mongoose.model("Posts", PostsSchema);
module.exports = Posts;
