import express from 'express';
import connect from "./config/database.js";
import dotenv from 'dotenv';
import router from "./routes/index.js";


dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", router);

app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}`);

    connect();

});



