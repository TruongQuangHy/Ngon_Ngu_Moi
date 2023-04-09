const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        required: true,
    },
    numViews: {
        type: Number,
        default: 0,
    },
    isLiked: {
        type: Boolean,
        default: false,
    },
    isDisliked: {
        type: Boolean,
        default: false,
    },
    likes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    dislikes: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    ],
    image: {
        type: String,
        default:
            "https://www.google.com.vn/imgres?imgurl=https%3A%2F%2Fcdn.pixabay.com%2Fphoto%2F2015%2F04%2F23%2F22%2F00%2Ftree-736885__480.jpg&tbnid=9SPhZ2nyEGps3M&vet=12ahUKEwiY_fXTlJj-AhWMCd4KHVIpAmQQMygCegUIARDBAQ..i&imgrefurl=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fnature%2F&docid=Ba_eiczVaD9-zM&w=771&h=480&q=image&ved=2ahUKEwiY_fXTlJj-AhWMCd4KHVIpAmQQMygCegUIARDBAQ"
    },
    author: {
        type: String,
        default: "Admin"
    },

}, {
    toJSON: {
        virtuals: true
    },
    toObject: {
        virtuals: true
    },
    timestamps: true

});

//Export the model
module.exports = mongoose.model('Blog', blogSchema);