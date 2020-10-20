const Seq=require('sequelize')
const {sequelize}=require('../config/db')

const User=sequelize.define(
    'user',
        {
            userId:{
                type:Seq.INTEGER,
                // primarykey:true,
                allowNull:true,
                // autoIncrement:true
            },
            mobileNo:{
                type: Seq.STRING,
                // primarykey:true,
                allowNull: false,
                field: 'mobileNo'
            },
            password:{
                type: Seq.STRING,
                // primarykey:true,
                allowNull: false,
                field: 'password'
            }
        },
        {
            timestamps:false
        }
);

User.sync({force:false})

module.exports={
    User
}

