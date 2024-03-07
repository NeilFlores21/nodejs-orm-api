const { DataTypes } = require('sequelize');

module.exports = model;

function model(sequelize) { 
    const attributes = {
        name: { type: DataTypes.STRING, allowNull: false }, 
        price: { type: DataTypes.FLOAT, allowNull: false }, 
        quantity: { type: DataTypes.INTEGER, allowNull: false },
        description: { type: DataTypes.STRING, allowNull: false }
    };
    const options = {
        // You might want to include some options here, such as timestamps, etc.
    };
    return sequelize.define('Product', attributes, options);
}
