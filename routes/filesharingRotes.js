const express = require('express')
const { uploadFile, showFile } = require('../controllers/filesharingController')
const { verifyToken } = require('../middlewares/verifyToken')
const { upload } = require('../utils/fileUpload')

const router = express.Router()


router.use(verifyToken)

// protected api
router.get('/:uuid',showFile)
router.post('/uploadFile',upload,uploadFile)

module.exports = router