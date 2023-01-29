const express= require('express');

const router= express.Router();
const likesController = require('../controllers/likes_controller');

router.post('/toggle',likesController.toggleLike);
router.post('/toggle-friens',likesController.toggleFriend);


module.exports = router;
