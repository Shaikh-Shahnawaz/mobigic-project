const express = require('express')
const { showUsers, registerUser, loginUser } = require('../controllers/authenticationController')
const { passowrdMiddleware } = require('../middlewares/passwordBcrypt')

const router = express.Router()

router.get('/',showUsers)

// for hash the password
router.post('/register',passowrdMiddleware,registerUser)

router.post('/login',loginUser)


module.exports = router