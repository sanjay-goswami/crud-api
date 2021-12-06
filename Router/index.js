const router = require('express').Router();
const student = require('../controller/api/student');

router.get('/student',student.find);
router.post('/student',student.create);
router.patch('/student',student.updateByRollNo);
router.delete('/student',student.deleteByRollNo);

module.exports = router;