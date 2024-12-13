import express from "express";
import "dotenv/config";
import beast from "./routes/beast.js"
//Vamos a importar morgan
import morgan from "morgan";


const app = express();
const port = process.env.PUERTO || 5000;

//Middleware
app.use(morgan("tiny"));

app.use("/api", beast);


app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})