import express from 'express';
import connect from "./config/database.js";
import dotenv from 'dotenv';


dotenv.config();


const app = express();
const PORT = process.env.PORT || 3000;





app.listen(PORT, async() => {
    console.log(`Server is running on port ${PORT}`);

    connect();



   

 
});

