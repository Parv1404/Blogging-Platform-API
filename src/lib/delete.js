const blogModel = require("../models/blogSchema")

const deleteBlog = async (id) => {
    try {
        const response = await blogModel.deleteOne({_id: id});
        return response;  
    } catch(error) {
        console.error("DB error in deleteBlog:", error);
        throw new Error("Failed to delete blog");
    }      
}

module.exports = deleteBlog;