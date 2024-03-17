const express = require('express')
const router = express.Router()

const TaskController = require('../controllers/TaskController')

router.get('/add', TaskController.createTask) // pega para o /tasks/add
router.post('/add', TaskController.createTaskSave)

router.get('/edit/:id', TaskController.updateTask) 
router.post('/edit', TaskController.updateTaskPost) 
router.post('/updatestatus', TaskController.toggleTaskStatus)
router.post('/remove', TaskController.removeTask)
router.get('/', TaskController.showTasks) // pega para o /tasks/ === /tasks

module.exports = router