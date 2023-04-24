const {Sequelize, ModelStatic, DataTypes} = require("sequelize")

/**
 * 
 * @param {Sequelize} sequelize 
 */
module.exports = (sequelize) => {
    const Album = sequelize.define('Album', {
        title : {
            type : DataTypes.STRING(50)
            , allowNull : false
        }

        , cover : {
            type : DataTypes.STRING
        }
        
    })
    
    return Album
}