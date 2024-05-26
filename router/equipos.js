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

router.get('/crear', (req, res)=>{
    res.render('crear')
})

router.post('/', async(req,res)=>{
    const body = req.body
    try {

        //metodo 1
        //const equiposDB = new equipos(body)
        //await equiposDB.save()

        //metodo 2
        await equipos.create(body)

        res.redirect('/equipos')
    } catch (error) {
        console.log(error)
    }
})

router.get('/:id', async(req, res)=>{
    const id = req.params.id;
    try {

        const equiposDB = await equipos.findOne({_id: id});
        console.log(equiposDB);

        res.render('detalle', {
            equipo: equiposDB,
            error: false
        })
        
    } catch (error) {
        console.log(error)
        res.render('detalle', {
            error: true,
            mensaje: 'No se encuentra el id seleccionado'
        })
    }
})
module.exports = router;