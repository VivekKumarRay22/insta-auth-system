const express = require("express");
const postController = require("../controllers/post.controller");
const postRouter = express.Router();
const multer = require("multer");
const identifyUser = require("../middlewares/auth.middleware");
const upload = multer({ storage: multer.memoryStorage() });

postRouter.post(
  "/",
  upload.single("image"),
  identifyUser,
  postController.createPostController,
);

/**
 * GET /api/posts/    [protected]
 */
postRouter.get("/", identifyUser, postController.getPostController);

/**
 * GET api/posts/details/:postId
 * - return details about post with id , also check whether the post belongs to the user that the request come from
 */

postRouter.get(
  "/details/:postId",
  identifyUser,
  postController.getPostDetailsController,
);

/**
 * @route /api/posts/like/:postId
 * @description like a post with the id provided in the req params
 */
postRouter.post(
  "/like/:postId",
  identifyUser,
  postController.likePostController,
);

module.exports = postRouter;
