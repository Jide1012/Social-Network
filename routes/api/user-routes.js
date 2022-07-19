const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    removeFriend,
} = require('../../controllers/user-controller');

//Users
router
    .route('/')
    .get(getAllUsers)
    .post(createUser);

//Users By: id
router
    .route('/:id')
    .get(getUserById)
    .put(updateUser)
    .delete(deleteUser);

//friendId
router
    .route('/:userId/friends/:friendsId')
    .delete(removeFriend)
    .post(addFriend);


module.exports = router;