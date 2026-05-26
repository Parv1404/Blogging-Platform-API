const mongoose = require("mongoose");

const blogSchema = new mongoose.Schema({
    title: String,
    content: String,
    category: String,
    tags: [String],
},
    { versionKey: false, timestamps: true }
);

const blogModel = mongoose.model("Blogs", blogSchema);

module.exports = blogModel;