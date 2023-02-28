const { Schema, Model, Types } = require('mongoose');
// Import moment module to give thoughts a timestamp
const moment = require('moment');

// Thought Schema
const thoughtSchema = new Schema (
  {
    thoughtText: {
      type: String,
      required: true,
      minlength: 1,
      maxlength: 280,
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: createdAtVal => moment(createdAtVal).format("MMM DD, YYYY [at] hh:mm a"),
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
      toJSON: {
          virtuals: true,
          getters: true,
      },
      id: false,
  }
);

// get total reaction count
thoughtSchema.virtual('reactionCount')
.get(function() {
    return this.reactions.length;
})

// create the Thought model using the thoughtSchema
const Thought = model('Thought', thoughtSchema);
// export the Thought model
module.exports = Thought;
