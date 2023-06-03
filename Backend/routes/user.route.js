const express = require('express');
const { registerUser,
    loginUser,
    getMe,
    getAll,
    deleteUser,
    logoutUser
} = require('../controllers/user.controller.js');
const { protect } = require('../middlewares/authMiddleware.js');

const router = express.Router();

router.post('/register', registerUser)
router.route('/login').post(loginUser)
router.route('/logout').post(logoutUser)
router.route('/delete/:id').delete(deleteUser)
router.get('/getall', getAll);
router.get('/me/:id', getMe);

router.get('/auth/user-role', protect, (req, res) => {
    res.status(200).json({ role: req.user.role });
});


module.exports = router;