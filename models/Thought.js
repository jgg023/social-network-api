const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');
//const dateFormat = require('../utils/dateFormat');
// Schema to create a Thought model
const ThoughtSchema = new Schema(
  {
    Thoughttext: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280
    },
    
    username: {
        type: String,
        required: true
      },

    createdAt: {
      type: Date,
      default: Date.now(),
    },
    
    reactions: [
     reactionSchema
    ],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

ThoughtSchema.virtual("reactionCount").get(function(){
    return this.reactions.length
})
const Thought = model('Thought', ThoughtSchema);

module.exports = Thought;