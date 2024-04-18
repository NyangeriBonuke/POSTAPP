const express = require('express')
const router = express.Router()
const PostController = require('../controllers/postController')
const upload = require('../middleware/multer')

router.post('/media', upload.single('media'), PostController.postMedia)

module.exports = router