const {Schema, model} = require('mongoose');
const User = require('./User');
const profileSchema = new Schema({
    user:{
        type : Schema.Types.ObjectId,
        ref: User,
        required: true
    },
    title:{
        type: String,
        trim: true,
        maxlangth: 100
    },
    bio:{
        type: String,
        trim: true,
        maxlangth: 500
    },
    image: {
        type: String,
        default: 'https://i.ibb.co/FXJxQ80/images.png'
    },
    links:{
        website: String,
        facebook: String,
        twiter: String,
        github: String
    },
    post: [
        {
            type:Schema.Types.ObjectId,
            ref:'Post'
        }
    ],
    bookmark:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Post'
        } 
    ]
},{
    timestamps: true
})

const Profile = model('Profile', profileSchema)
module.exports = Profile