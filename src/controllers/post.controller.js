const postModel = require("../models/post.model");
const ImageKit = require("@imagekit/nodejs");
const { toFile } = require("@imagekit/nodejs");
const jwt = require("jsonwebtoken");

const imagekit = new ImageKit({
  privateKey: process.env.IMAGEKIT_PRIVATE_KEY,
});

async function createPostController(req, res) {
  console.log(req.body, req.file);


  const file = await imagekit.files.upload({
    file: await toFile(Buffer.from(req.file.buffer), "file"),
    fileName: "Test",
    folder: "cohort2-insta-clone",
  });

  // res.send(file);

  const post = await postModel.create({
    caption: req.body.caption,
    imgUrl: file.url,
    user: req.user.id,
  });

  res.status(201).json({
    message: "post created ",
    post,
  });
}

async function getPostController(req, res) {
 

  const userId = req.user.id;

  const posts = await postModel.find({
    user: userId,
  });

  res.status(201).json({
    message: "posts fetched successfully ",
    posts,
  });
}

async function getPostDetailsController(req, res) {
  

  const userId = req.user.id;
  const postId = req.params.postId;

  const post = await postModel.findById(postId);
  if (!post) {
    return res.status(404).json({
      message: "Not Found",
    });
  }

  const isValidUser = postId.user.toString() === userId;
  if (!isValidUser) {
    return res.status(403).json({
      message: "Forbidden content ",
    });
  }

  res.status(200).json({
    message: "details fetched successfully!",
    post,
  });
}

module.exports = {
  createPostController,
  getPostController,
  getPostDetailsController,
};
