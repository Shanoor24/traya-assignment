const mongoose = require("mongoose");


const reviewSchema = new mongoose.Schema({
    name: {type: String },
    imageUrl: {type: String},
    rating: {type: Number, required:[true, "ratings must be provided"]},
    review: {type: String, require: [true, "review must be provided"], trim: true}
})

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String, required: [true, "email must be provided"], trim: true},
    password: {type: String, required: [true, "password must be provided"]},
    lastOrder: reviewSchema,
    createdAt: {type: Date, default: Date.now()}
});


module.exports = mongoose.model("User", userSchema)