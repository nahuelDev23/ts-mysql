import {Sequelize} from 'sequelize'

const db = new Sequelize('ts_curso','root','',{
    host:'localhost',
    dialect:'mysql',
    // logging:false para ver porn consola las consultas
})

export default db