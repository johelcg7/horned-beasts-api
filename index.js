import express from "express";
import "dotenv/config";


const app = express();

const port = process.env.PUERTO || 3000;

app.get('/', (req,res) => {

    res.send('Horned Beasts API de Johel');
});

app.get("/test", (req, res) => {
    res.json({
        name: "Johel",
        date: "07-10-2024",
        timestamp: Date.now(),
    })
})

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
})