const router= require('express').Router();

// const { postNewReaction, deleteThoughtById } = require('../../controllers/thought-controllers');
const { getAllThoughts,
        getThoughtById,
        postNewThought,
        postNewReaction,
        putThoughtById,
        deleteThoughtById,
        deleteExistingReaction
    } = require('../../controllers/thought-controllers');

//Thoughts    
router
    .route('/')
    .post(postNewThought)
    .get(getAllThoughts)


//Getting thought per ID
router
    .route('./:id')
    .get(getThoughtById)
    .put(putThoughtById)
    .delete(deleteThoughtById)

//Getting thought ID and Reactions
router
    .route('/:thoughtId/reactions')
    .post(postNewReaction)
    .delete(deleteExistingReaction);

    
module.exports = router;