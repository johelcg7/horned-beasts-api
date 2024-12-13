// Para crear un ruta

import express from "express";
import hornedBeasts from "../data/horned-beasts.json" assert { type:'json' }

const router = express.Router();
//Tipos de router: get (traer), post (insertar), put, patch (editar), delete (eliminar)

router.get("/beasts", (req,res) =>{
    res.json(hornedBeasts)
})

router.get("/beasts/:id", (req,res) =>{
    //req.params: parametros que envio por la url
    const { id } = req.params;
    //find
    const singleBeast = hornedBeasts.find((elemento)=> elemento.id === parseInt(id))
    res.json({
        message: "Respuesta exitosa",
        data: singleBeast
    });
})

router.get("/beasts-number", (req,res) =>{
    const beastsNumber = hornedBeasts.length;
    res.json({ //Arreglo para tener un mensaje
        message: "Petición exitosa tienes ",
        data: beastsNumber
    })
})

export default router;
