const createBlog = require("../lib/create");

const createHandler = async (req, res) => {
    try {
        const { title, content, category, tags } = req.body;

        if (!title || !content || !category) {
            return res.status(400).json({   
                "Error": "Invalid request, please provide all the fields"
            });
        }

        const blogAdded = await createBlog(title, content, category, tags ?? []);  // ✅ default empty array for tags
        res.status(201).json(blogAdded);

    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Internal server error" });
    }
};

module.exports = createHandler;