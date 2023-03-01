const router = require('express').Router();
const {
  getusers,
  getSingleuser,
  createuser,
  deleteuser,
  addfriend,
  removefriend,
  updateuser,
} = require('../../controllers/userController');

// /api/users
router.route('/').get(getusers).post(createuser);

// /api/users/:userId
router.route('/:userId').get(getSingleuser).delete(deleteuser).put(updateuser);

// /api/users/:userId/friends/:friendId
router.route('/:userId/friends/:friendId').delete(removefriend).post(addfriend);

module.exports = router;
