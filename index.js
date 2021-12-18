const inquirer = require("inquirer");
const { prompt } = require("inquirer");
const cTable = require("console.table");
const db = ('./db');

const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('mysql://root:rootroot@localhost:3306/movies_db')

module.exports = sequelize
