const express = require('express');
const router = express.Router({ mergeParams: true }); 
const userController = require('../controllers/userController');

// GET /api/organizations/:orgId/users
router.get('/', userController.getUsersByOrganization);

// POST /api/organizations/:orgId/users
router.post('/', userController.createUser);




// PUT /api/users/:userId (Note: This might be better as a top-level route)
router.put('/:userId', userController.updateUser);
// DELETE /api/users/:userId
router.delete('/:userId', userController.deleteUser);


module.exports = router;