const blogModel = require("../models/blogSchema")

const updateBlog = async (id, content) => {
    try {
        const response = await blogModel.findByIdAndUpdate(
            id, 
            {content},
            {new: true}
        );
        return response;        
    } catch(error) {
        console.error("DB error in updateBlog:", error);
        throw new Error("Failed to update blog");  
    }
}  

module.exports = updateBlog;