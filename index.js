const express = require("express")

const postRouter = require("./data/post/posts-router.js")

const server = express();

server.use(express.json());

server.get("/", (req, res) => {
    res.send(`
        <h2>Lambda Posts API</h2>
        <h4>Welcome to Lambda Posts API</h4>`
    )
})

server.use("/api/posts", posts-Router);

server.listen(5000, () => {
    console.log("running localhost: 5000")
})