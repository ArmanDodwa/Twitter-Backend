import tweetRepository from "../repository/tweet-repository.js";
import hashtagRepository from "../repository/hashtag-repository.js";

class tweetService {
    constructor() {
        this.tweetRepository = tweetRepository;
        this.hashtagRepository = hashtagRepository;
    }
    

    async create(data) {
        try {
            const content = data.content;
            const hashtags = content.match(/#[a-zA-Z0-9_]+/g).map(tag=> tag.substring(1).toLowerCase());
            
            const tweet = await this.tweetRepository.create(data);

            let alreadyPresentHashtags = await this.hashtagRepository.getHashtagByName(hashtags);
            let textOfPresentTag = alreadyPresentHashtags.map(tag => tag.text);
            let newTags = hashtags.filter(hashtags => !textOfPresentTag.includes(hashtags));

            newTags = newTags.map(tag => {
                return { 
                    text: tag, 
                    tweet: [tweet._id] }
            });

            await this.hashtagRepository.bulkCreate(newTags);
            alreadyPresentHashtags.forEach( async (tag) => {
                tag.push(tweet._id);
                await tag.save();
            });

            return tweet;   

        } catch (error) {
            console.log(error);
            throw error;
        } 
    }

    async getTweet(id) {
        try {
            const tweet = await this.tweetRepository.getTweet(id);
            return tweet;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

}

export default new tweetService();