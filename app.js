const express = require('express');
const app = express();

const port = process.env.PORT || 3030;

//Conexion a base de datos
const mongoose = require('mongoose');

const user = 'yohanmira1';
const password ='Yomi2024.';
const dbname = 'Inventario';
const uri = `mongodb+srv://${user}:${password}@cluster0.0vgudtl.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0`;

mongoose.connect(uri,
    {useNewUrlParser: true, useUnifiedTopology: true }
)

    .then(() => console.log('Base de datos conectada'))
    .catch(e => console.log(e))


// motor de plantillas
app.set('view engine', 'ejs');
app.set('views', __dirname + '/views');

app.use(express.static(__dirname + "/public"));

//Rutas web
app.use('/', require('./router/rutasweb'));
app.use('/equipos', require('./router/equipos'));

app.use((req, res, next)=>{
    res.status(404).render("404", {
        titulo: "404",
        descripcion: "Título del sitio web"
    });
})

app.listen(port, ()=> {
    console.log ('servidor a su servicio en el puerto', port)
});