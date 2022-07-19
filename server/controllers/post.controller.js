const { validationResult } = require("express-validator");
const PostModel = require("../models/post.model");
const {
  multiMongooseToObect,
  mongooseToObect,
} = require("../helpers/mongoose");

class Post {
  async create(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let isExistPost = false;
    const { title, description, slug, userId } = req.body;

    try {
      const postInDB = await PostModel.findOne({ slug });
      isExistPost = postInDB ? true : false;
    } catch (error) {
      return res.status(500).json({
        errors: { msg: "Server error: " + error.message },
      });
    }

    if (isExistPost) {
      return res.status(400).json({ errors: { msg: "Post already exists" } });
    }

    try {
      await PostModel.create({
        title,
        description,
        slug,
        userId,
      });

      return res.status(201).json({
        data: {
          title,
          description,
          slug,
        },
      });
    } catch (error) {
      return res.status(500).json({
        errors: { msg: "Server error: " + error.message },
      });
    }
  }

  async update(req, res) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    let isExistPost = false;
    const { title, description, slug, userId, postId } = req.body;

    try {
      const postInDB = await PostModel.findOne({ slug });
      isExistPost = postInDB ? true : false;
    } catch (error) {
      return res.status(500).json({
        errors: { msg: "Server error: " + error.message },
      });
    }

    if (!isExistPost) {
      return res.status(400).json({ errors: { msg: "Post not exists" } });
    }

    try {
      await PostModel.findByIdAndUpdate(postId, {
        title,
        description,
        slug,
        userId,
      });

      return res.status(200).json({
        data: {
          title,
          description,
          slug,
        },
      });
    } catch (error) {
      return res.status(500).json({
        errors: { msg: "Server error: " + error.message },
      });
    }
  }

  async getAll(req, res) {
    try {
      const allPosts = await PostModel.find({});
      return res.status(200).json({
        data: multiMongooseToObect(allPosts),
      });
    } catch (error) {
      return res.status(500).json({
        errors: { msg: "Server error: " + error.message },
      });
    }
  }

  async getPostByUser(req, res) {
    try {
      const { userId } = req.params;
      const allPosts = await PostModel.find({ userId });
      return res.status(200).json({
        data: multiMongooseToObect(allPosts),
      });
    } catch (error) {
      return res.status(500).json({
        errors: { msg: "Server error: " + error.message },
      });
    }
  }

  async getById(req, res) {
    try {
      const { id } = req.params;
      const post = await PostModel.findById(id);
      return res.status(200).json({
        data: mongooseToObect(post),
      });
    } catch (error) {
      return res.status(500).json({
        errors: { msg: "Server error: " + error.message },
      });
    }
  }

  async getBySlug(req, res) {
    try {
      const { slug } = req.params;
      const post = await PostModel.findOne({ slug });
      return res.status(200).json({
        data: mongooseToObect(post),
      });
    } catch (error) {
      return res.status(500).json({
        errors: { msg: "Server error: " + error.message },
      });
    }
  }
}

module.exports = new Post();
