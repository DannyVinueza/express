const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send("Pagina de inicio!")
})

app.get('/productos', (req,res)=>{
    res.setHeader('Content-Type', 'text/html');
    res.write("<h1 style='background-color: #bfbcbb'>Pagina para los productos.</h1>");
    res.end();
})

app.get('/coca',(req,res)=>{
    res.sendFile('./coca-cola.jpeg',{
        root:__dirname
    })
})

app.use((req,res)=>{
    res.status(404).send("Página no encontrada - 404")
})

app.use('/credenciales/:profile/photo', (req,res)=>{
    if(req.params.profile === "Danny"){
        res.setHeader('Content-Type', 'text/html');
        res.write("<h1>Bienvenido: " + req.params.profile + "</h1>")
    }
})

app.listen(3000)
console.log('Servidor ejecutandose en el puerto 3000');