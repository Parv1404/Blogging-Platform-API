const updateBlog = require("../lib/update");

const updateHandler = async (req, res) => {
    try {
        const {id} = req.params;
        const {content} = req.body;

        if (!content) {
            return res.status(400).json({  
                "Error": "Invalid request, please provide all the fields"
            });
        }

        const blogUpdated = await updateBlog(id, content);  
        if(!blogUpdated) {
            return res.status(404).json({message:"Blog post with this id not found"});
        }
        res.status(200).json(blogUpdated);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = updateHandler;