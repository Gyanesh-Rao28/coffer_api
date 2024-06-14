import dotenv from 'dotenv';
import { app } from './app.js';

dotenv.config({
    path: './env'
})


// MongoDB Connection

const PORT = process.env.PORT || 3000


app.listen(PORT, () => {
    console.log("Running on", PORT)
})


