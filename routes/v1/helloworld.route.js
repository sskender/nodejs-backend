const express = require('express')
const helloWorldController = require('../../controllers/helloworld.controller')

const router = express.Router()

router.route('/').get(helloWorldController.greeting)

module.exports = router
