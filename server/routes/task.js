const router = require('express').Router()

const TaskController = require('../controllers/task')

router.get('/', TaskController.getAllTasks)

module.exports = router
