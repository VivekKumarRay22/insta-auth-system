const followModel = require("../models/follow.model");
const userModel = require("../models/user.model");

async function followUserController(req, res) {
  const followerUsername = req.user.username;
  const followingUsername = req.params.username;

  if (followerUsername === followingUsername) {
    return res.status(400).json({
      message: "you can not follow yourself",
    });
  }

  const isAlreadyFollow = await followModel.findOne({
    follower: followerUsername,
    following: followingUsername,
  });

  if (isAlreadyFollow) {
    return res.status(200).json({
      message: `you already follows ${followingUsername}`,
      follow: isAlreadyFollow,
    });
  }

  const isUserExists = await userModel.findOne({
    username: followingUsername,
  });

  if (!isUserExists) {
    return res.status(400).json({
      message: "User with such username does not exist",
    });
  }

  const followRecord = await followModel.create({
    follower: followerUsername,
    following: followingUsername,
  });

  res.status(201).json({
    message: `Now you are following ${followingUsername}`,
    follow: followRecord,
  });
}

async function unfollowUserController(req, res) {
  const followerUsername = req.user.username;
  const followingUsername = req.params.username;

  const isUserFollowing = await followModel.findOne({
    follower: followerUsername,
    following: followingUsername,
  });

  if (!isUserFollowing) {
    return res.status(400).json({
      message: `you does not follow ${followingUsername}`,
    });
  }

  await followModel.findByIdAndDelete(isUserFollowing._id);

  res.status(200).json({
    message: `you unfollowed ${followingUsername}`,
  });
}

module.exports = { followUserController, unfollowUserController };
