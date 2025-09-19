import mongoose from "mongoose";

const tweetSchema = new mongoose.Schema({
  content: {
    type: String,
  },
  likes: {
    type: Number,
  },
  noReTweets: {
    type: Number,
  },
  comment: {
    type: mongoose.Schema.Types.ObjectId, // ✅ Correct
    ref: "Comment", // optional, if you want to link to a Comment model
  },
});

const Tweet = mongoose.model("Tweet", tweetSchema);

export default Tweet;
