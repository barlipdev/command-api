module.exports = app => {
    const commands = require("../controller/controller.js");
    var router = require("express").Router();

    router.post("/", commands.create);

    app.use('/execute', router);
  };