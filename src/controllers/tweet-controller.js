import tweetService from "../services/tweet-service.js";

export const createTweet = async (req, res) => {
  try {
    const tweet = await tweetService.create(req.body);
    res.status(201).json({
      success: true,
      message: "Tweet created successfully",
      data: tweet,
      error: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
};

export const getTweet = async (req, res) => {
  try {
    const tweet = await tweetService.getTweet(req.params.id);
    res.status(200).json({
      success: true,
      message: "Tweet fetched successfully",
      data: tweet,
      error: {},
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal server error",
      error: error,
    });
  }
};
