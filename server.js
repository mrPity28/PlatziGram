const express = require('express')
var app = express()
//motod de vistas llamado por el render
app.set('view engine' , 'pug')
//middleware que indica, para que se sirva el directorio
app.use(express.static('public'))

app.get('/' , (req , res)=>{
    res.render('index')
})

const port = 3000

app.listen( port , (err)=>{
    if(err) return console.log('huno un error'), process.exit(1)


    console.log('platziGram escuchando en el puerto 3000')
} )
