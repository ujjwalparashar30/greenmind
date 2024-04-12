const {Router}= require('express');
const checkout= require('./checkout');


const router= Router();
router.post('/check',checkout)


module.exports = router;