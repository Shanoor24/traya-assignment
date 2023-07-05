require("dotenv").config();
const express = require("express");
const connectDB = require("./src/dbConfig/connect")
const app = express();
const cors = require("cors");
app.use(cors());

app.use(express.json());


const PORT = process.env.PORT || 8000;

const users_routes = require("./src/routes/users")

app.get("/", (req, res) => {
    res.send("Hi, I am live")
})

app.use("/users", users_routes);


const start = async() => {
 try {
    await connectDB(process.env.MONGODB_URL);
    app.listen(PORT, '0.0.0.0', () => {
        console.log(`${PORT} Yes I am connected`)
    })
 } catch (error) {
    console.log(error)
 }
}

start()


