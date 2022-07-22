const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    postNewUser,
    postNewFriend,
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
    .put(postNewUser)
    .delete(deleteUserById);

//friendId
router
    .route('/:userId/friends/:friendsId')
    .delete(deleteExistingFriend)
    .post(postNewFriend);


module.exports = router;