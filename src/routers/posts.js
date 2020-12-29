const postsController = require("../controller/postsController");
const express = require("express");
const router = express.Router();
router.post("/", postsController.createPost);
router.get("/",postsController.getAllPosts);
router.delete("/:postId",postsController.deletePost);
router.put("/:postId",postsController.updatePost);
module.exports = router;
