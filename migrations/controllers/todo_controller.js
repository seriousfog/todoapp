module.exports.homeRoute = async function (req, res, next) {
    const {sequelize} = require("../models/index");
    const {QueryTypes} = require("sequelize");

    let toDoItems = await sequelize.query('select * from todo', {type: QueryTypes.SELECT});
    res.render('index', {toDoItems});
}

module.exports.renderAddForm = function(req, res){
    res.render('create_todo');
};
