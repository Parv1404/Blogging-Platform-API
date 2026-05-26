const deleteBlog = require("../lib/delete");

const deleteHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const blogDeleted = await deleteBlog(id);  
    
        if(blogDeleted.deletedCount === 0) {
            return res.status(404).json({message:"Blog post with this id not found"});
        }
        return res.status(204).json({message: "Blog deleted successfully"});

    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
};

module.exports = deleteHandler;