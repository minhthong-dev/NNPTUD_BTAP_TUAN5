var express = require('express');
var router = express.Router();
var userController = require('../controller/userController')
/* GET users listing. */
///api/v1/users
router.get('/', async function (req, res, next) {
  await userController.getAllUsers(req, res)
});
///api/v1/users/
router.post('/', async function (req, res, next) {
  await userController.createUser(req, res)
});

// Lấy user theo id
router.get('/:id', async function (req, res, next) {
  await userController.getUserById(req, res)
});

// Update user theo id
router.put('/:id', async function (req, res, next) {
  await userController.updateUser(req, res)
});

// Xóa mềm user
router.delete('/:id', async function (req, res, next) {
  await userController.deleteUser(req, res)
});

// Enable user
router.post('/enable', async function (req, res, next) {
  await userController.enableUser(req, res)
});

// Disable user
router.post('/disable', async function (req, res, next) {
  await userController.disableUser(req, res)
});

module.exports = router;
