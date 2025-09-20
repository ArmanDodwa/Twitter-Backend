import Hashtag from "../model/hashtag.js";

class hashtagRepository {
  async create(data) {
    try {
      const hashtag = await Hashtag.create(data);
      return hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async bulkCreate(data) {
    try {
      const hashtags = await Hashtag.insertMany(data);
      return hashtags;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getHashtagByName(text) {
    try {
      const hashtags = await Hashtag.find({
        text: text
      });
      return hashtags;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async getHashtag(id) {
    try {
      const hashtag = await Hashtag.findById(id);
      return hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }

  async deleteHashtag(data) {
    try {
      const hashtag = await Hashtag.deleteOne(data);
      return hashtag;
    } catch (error) {
      console.log(error);
      throw error;
    }
  }
}

export default new hashtagRepository();
