const express = require("express");
const featureRouter = require("./src/routes/featureRoute")
const connectDb = require("./src/db/config")
const env = require("dotenv");

env.config();

const app = express();

connectDb();

app.use(express.json());

app.use('/api/posts', featureRouter);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running at PORT: ${PORT}`);
});
