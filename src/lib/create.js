const createBlog = async (title, content, category, tags) => {
    try {
        const response = await blogModel.create({
            title, content, category, tags
        });
        return response;
    } catch (error) {
        console.error("DB error in createBlog:", error);
        throw new Error("Failed to create blog");  // rethrow so caller knows
    }
}