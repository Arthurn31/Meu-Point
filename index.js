import express from 'express'
import controller from './controller/estado.js'
import bodyP from 'body-parser'
const server = express()
server.set('view engine', 'ejs')
server.use(express.static('./public'))
server.use(bodyP.urlencoded({ extended: true }))
server.use(bodyP.json())

server.get('/', controller.listar_estados)

server.get('/insert', (req, res) => {
  res.render('inserir')
})

server.post('/insert', controller.inserir)

server.listen(3000, () => {
  console.log('http://localhost:3000')
})
