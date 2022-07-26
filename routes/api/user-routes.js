const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    postNewUser,
    postNewFriend,
    putUserById,
    deleteUserById,
    deleteExistingFriend,
} = require('../../controllers/user-controller');

//Users
router
    .route('/')
    .get(getAllUsers)
    .post(postNewUser);

//Users By: id
router
    .route('/:id')
    .get(getUserById)
    .put(putUserById)
    .delete(deleteUserById);

//friendId
router
    .route('/:userId/friends/:friendId')
    .delete(deleteExistingFriend)
    .post(postNewFriend);


module.exports = router;