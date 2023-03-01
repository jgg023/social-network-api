const router = require('express').Router();
const {
  getusers,
  getSingleuser,
  createuser,
  deleteuser,
  addAssignment,
  removeAssignment,
} = require('../../controllers/thoughtController');

// /api/users
router.route('/').get(getusers).post(createuser);

// /api/users/:userId
router.route('/:userId').get(getSingleuser).delete(deleteuser);

// /api/users/:userId/assignments
router.route('/:userId/assignments').post(addAssignment);

// /api/users/:userId/assignments/:assignmentId
router.route('/:userId/assignments/:assignmentId').delete(removeAssignment);

module.exports = router;
