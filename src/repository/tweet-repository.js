import Tweet from "../model/tweet.js";
import crudRepository from "./crud-repository.js";

class tweetRepository extends crudRepository {

  constructor() {
    super(Tweet);
  }


  async getAllTweets(data) {
    try {
      const tweets = await Tweet.find({});
      return tweets;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getTweet(id) {
    try {
      const tweet = await Tweet.findById(id);
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteTweet(data) {
    try {
      const tweet = await Tweet.deleteOne(data);
      return tweet;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}


export default new tweetRepository();