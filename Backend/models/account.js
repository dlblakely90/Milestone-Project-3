'use strict'
const { Model } = require('sequelize')

module.exports = (sequelize, DataTypes) => {
    class Account extends Model {
        static associate({ Transaction }) {
            Account.hasMany(Transaction, { as: 'transactions', foreignKey: 'transaction_id' })
        }
    }

    Account.init({
        account_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        username: {
            type: DataTypes.STRING,
            allowNull: false
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false
        }
    }, {
        sequelize,
        modelName: 'Account',
        tableName: 'accounts',
        timestamps: false
    })
    return Account
}

