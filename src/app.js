import express from "express";
import cors from "cors";
import userRoutes from "./routes/userRoutes.js";

const app = express()

app.use(cors())
app.use(express.json())

app.use(userRoutes)

app.get('/', (req, res) => res.send('Hello World!'))

app.use((req, res) => {
    res.status(404).json({
        message:'Not Found',
        status:'error'
    });
} )

export default app;