const express= require('express');

const router= express.Router();
const homeController= require('../controllers/home_controller');

console.log('router loaded');
router.get('/',homeController.home);
router.use('/users',require('./users'));
router.use('/posts', require('./posts'));


//fo any further routes, acess from here

//router.use('/routerName, require('./routerfile'));

module.exports=router;