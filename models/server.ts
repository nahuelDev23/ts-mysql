import express,{Application} from 'express'
import userRoutes  from '../routes/usuario.routes'
import cors from 'cors'
import db from '../db/connection'

class Server {
    private app:Application
    private port:string
    private apiPaths = {
        usuarios:'/api/usuarios',
    }
    constructor(){
        this.app = express()
        this.port = process.env.PORT || '8000'
        this.dbConnection()
        this.middlewares()
        this.routes()
    }
    routes(){
        this.app.use(this.apiPaths.usuarios,userRoutes)
    }

    async dbConnection(){
        try {
            await db.authenticate()
            console.log('db online');
            
        } catch (error) {
            throw new Error(error)
        }
    }

    middlewares(){
        this.app.use( cors() )
        this.app.use( express.json() )
        this.app.use(express.static('public'))
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log('servidor corriendo!!');
            
        })
    }
}

export default Server