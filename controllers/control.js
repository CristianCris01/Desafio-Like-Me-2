const {pool} = require ("../utils/connectionDB.js")

async function modifyPost (id,title, image, description){
    const values = [id, title, image, description]
    let consulta = "UPDATE posts SET title=$1, image=$2, description=$3 WHERE id=$4"

    try{
        const result = await pool.query(consulta, values)
        console.log(result)
        return "🟢 Post modificado con exito"
    } catch (error){
        return "🔴 Error" + error.detail

    }
    }


    async function deletePost(id) {
        const values = [id]
        let consulta = "DELETE FROM post WHERE id=$1"

        try {
            const result = await pool.query(consulta,values)
            console.log(result)

            if (result.rowCount == 0){
                throw new Error ("Post no encontrado")

            }
            return "🟢 Post eliminado con exito"
        }
        catch (error){
            return "🔴 Error" + error.detail
        }
    }
 

    module.exports = {modifyPost, deletePost}




