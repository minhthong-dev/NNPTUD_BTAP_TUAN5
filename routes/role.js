const roleController = require('../controller/roleController')
var express = require('express');
var router = express.Router();


router.get('/', async function (req, res, next) {
  await roleController.getAllRole(req, res)
});

router.post('/', async function (req, res, next) {
  await roleController.createRole(req, res)
});
module.exports = router;