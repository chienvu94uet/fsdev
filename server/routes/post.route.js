const express = require("express");
const Post = require("../controllers/post.controller");
const postValidator = require("../validators/post.validator");
const router = express.Router();

router.post("/create", postValidator.create, Post.create);
router.post("/:id", postValidator.update, Post.update);
router.get("/all", Post.getAll);
router.get("/:slug", Post.getBySlug);
router.get("/user/:userId", Post.getPostByUser);
router.get("/getById/:id", Post.getById);

module.exports = router;
