const blogModel = require("../models/blogSchema")

const getOneBlog = async (id) => {
    try {
        const response = await blogModel.findById(id);
        return response; 
    } catch(error) {
        console.error("DB error in fetching blog:", error);
        throw new Error("Failed to fetch blog");  // rethrow so caller knows
    }        
}

const getAllBlog = async () => {
    try {
        const response = await blogModel.find({});
        return response; 
    } catch(error) {
        console.error("DB error in fetching blogs:", error);
        throw new Error("Failed to fetch blogs");  // rethrow so caller knows
    }        
}

module.exports = {getOneBlog, getAllBlog};