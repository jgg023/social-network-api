const { Schema, model } = require('mongoose');


// Schema to create User model
const UserSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            unique: true,
            trim: true,

        },
        email: {
            type: String,
            required: true,
            unique: true,
        },

        Thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'Thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],

    },
    {
        toJSON: {
            virtuals: true,
        },
        id:false,
    }
);
UserSchema.virtual("friendCount").get(function(){
    return this.friends.length;
})

const User = model('User', UserSchema);

module.exports = User;