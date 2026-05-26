const {getOneBlog, getAllBlog} = require("../lib/get");

const getOneHandler = async (req, res) => {
    try {
        const {id} = req.params;

        const blogGet = await getOneBlog(id);  
        if(!blogGet) {
            return res.status(404).json({message:"Blog post with this id not found"});
        }
        res.status(200).json(blogGet);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

const getAllHandler = async (req, res) => {
    try {
        const blogGetAll = await getAllBlog();  
        if(!blogGetAll) {
            return res.status(404).json({message:"Blog post with this id not found"});
        }
        res.status(200).json(blogGetAll);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};


module.exports = {getOneHandler, getAllHandler};