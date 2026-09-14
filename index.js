const express = require ('express')
const cors = require('cors')
const {connect} = require('./utils/connectionDB.js')
const {modifyPost, deletePost} = require("../Backend/controllers/control.js")


const app = express()
 app.use(express.json())
 app.use(cors())

 app.listen(3000, async () => {
    console.log("🟢 Servidor iniciado con exito en http://localhost:3000")
    try {
        const hora = await connect()
        console.log("🟢 Conecxion a la base de datos exitosa a las ", hora

        )
    } catch (error){
        console.log("🔴 Error al conectarse a la base de datos: ", error.message)
    }
 })


 app.put("/post/:id", async (req, res) => {
    const {id} = req.params
    const {title, image, description} = req.body

    try {
        const result = await modifyPost(id, title, image, description)
        res.send(result)
    }
    catch (error){
        res.send(error)
    }
 })

 app.delete("/post/:id", async (req, res) => {
    const {id} = req.params
     try {
        const result = await deletePost(id)
        res.send(result)
     }
     catch (error) {
        res.send(error)
     }
 })