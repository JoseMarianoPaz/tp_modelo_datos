const express = require('express');
const router = express.Router();
const {list,nueva,recommended,detail} = require('../controllers/moviesController');


router.get('/', list)
router.get('/new', nueva)
router.get('/recommended', recommended)
router.get('/detail/:id', detail)



module.exports = router;
