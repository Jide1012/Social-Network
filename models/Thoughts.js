const dateFormat = require('../utils/dateFormat.js');
const { Schema, model, Types } = require('mongoose');

const ReactionSchema = new Schema(
    {
        username: {
            type: String,
            required: true
        },
        reactionId: {
            type: Schema.Types.ObjectId,
            default: () => new Types.ObjectId()
        },
        reactionBody: {
            type: String,
            required: true,
            maxLength: 280
        },
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        }
    }
);

const ThoughtSchema = new Schema(
    {
        createdAt: {
            type: Date,
            default: Date.now,
            get: createdAtVal => dateFormat(createdAtVal)
        },
        username: { 
            type: String,
            required: true
        },
        thoughtText: {
            type: String,
            required: true,
            minLength: 1,
            maxLength: 180
        },

        reactions: [ReactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
            getters: true
        },
        id: false
    }
);

ThoughtSchema.virtual('reactionCount').get(function() {
    return this.reactions.length;
});

const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;