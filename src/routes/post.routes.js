const express = require("express");
const postController = require("../controllers/post.controller");
const postRouter = express.Router();
const multer = require("multer");
const upload = multer({ storage: multer.memoryStorage() });

postRouter.post(
  "/",
  upload.single("image"),
  postController.createPostController,
);

/**
 * GET /api/posts/    [protected]
 */
postRouter.get("/", postController.getPostController);

/**
 * GET api/posts/details/:postId
 * - return details about post with id , also check whether the post belongs to the user that the request come from
 */

postRouter.get("/details/:postId", postController.getPostDetailsController)

module.exports = postRouter;
