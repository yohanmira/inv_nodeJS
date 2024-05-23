const express = require('express');
const router = express.Router();

const equipos = require('../models/equipo');

router.get('/', async(req, res)=>{

    try {

        const arraEquiposDB = await equipos.find()
        console.log(arraEquiposDB)

        res.render("equipos", {
            arrayEquipos: arraEquiposDB

        });
        
    } catch (error) {
        console.log(error)
    }

    
})

module.exports = router;