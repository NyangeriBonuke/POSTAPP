const PostUseCase = require('../usecases/postUseCase')

class PostController{
    async postMedia(req, res){
        try{
            const {userId, title, mediaUrl} = req.body
            const returnPost = PostUseCase.postMedia(userId, title, mediaUrl)
            return res.status(200).json(returnPost)
        }
        catch(error){
            return res.status(400).json(`postmedia controller error ${error}`)
        }
    }
}

module.exports = new PostController