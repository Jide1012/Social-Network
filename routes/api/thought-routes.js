const router= require('express').Router();

const { postNewReaction } = require('../../controllers/thought-controllers');
const { getAllThoughts,
        addThoughts,
        removeThoughts,
        addReaction,
        getOneThought,
        updateThoughts
    } = require('../../controllers/thoughts-controller');

//Thoughts    
router
    .route('/')
    .post(addThoughts)
    .get(getAllThoughts)


//Getting thought per ID
router
    .router('./:id')
    .get(getOneThought)
    .put(updateThoughts)
    .delete(removeThoughts)

//Getting thought ID and Reactions
router
    .route('/:thoughtId/reactions')
    .post(addReaction)
    .delete(deleteExistingReaction);

    
module.exports = router;