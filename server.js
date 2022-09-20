const express = require('express')
const path = require('path')

const app = express()

const server = require('http').createServer(app)

const port = '3000'

app.use(express.static('public'));

app.get('/', (req,res) => {
    res.sendFile(__dirname + 'index.html')
})
app.get('/fotos',(req,res) => {
    res.sendFile(__dirname + 'pic.html')
})
app.get('/redes-socias', (req,res) => {
    res.sendFile(__dirname + 'socias.html')
})
app.get('/inscrever', (req,res) => {
    res.sendFile(__dirname + 'inscricao.html')
})



server.listen(port,function(){
    console.log('Servidor rodando na porta '+port)
})
