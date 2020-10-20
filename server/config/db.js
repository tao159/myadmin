const {Sequelize}=require('sequelize')

const sequelize= new Sequelize('myadmin','root','1763429633yt',{
    host:"localhost",
    dialect:"mysql",
    operatorsAliases:false,
    dialectOptions:{
        charset:"utf8mb4",
        collate:"utf8mb4_unicode_ci",
        supportBigNumbers:true,
        bigNumberStrings:true
    },
    pool:{
        max:5,
        min:0,
        acquire:30000,
        idle:10000
    },
    timezone:'+8:00'
})
console.log(sequelize.define)
try{
    sequelize.authenticate();
    console.log('Connection has been established successfully.')
}catch(error){
    console.log('Unable to connect to the database:',error)
}
module.exports={
    sequelize
}