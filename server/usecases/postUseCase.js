const Post = require('../models/postModel')

class PostUseCase{
    async postMedia(userId, title, mediaUrl){
        try{
            const newPost = new Post({userId, title, mediaUrl})
            const savedPost = await newPost.save()
            return savedPost
        }
        catch(error){
            throw new Error(`post media usecase error ${error}`)
        }
    }
}

module.exports = new PostUseCase