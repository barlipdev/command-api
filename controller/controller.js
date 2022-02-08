const db = require("../model");
const Command = db.commands;
const { exec } = require('child_process');


exports.create = (req, res) => {
    if (!req.body.command) {
        res.status(400).send({ message: "Command field cannot be empty" });
        return;
    }

    exec(req.body.command, (err, stdout, stderr) => {
        if (err) {
          console.error(err);
          res.status(500).send("Wrong command!");
        } else {
            const command = new Command({
                command: req.body.command,
                output: stdout + stderr
            })

            command
            .save(command)
            .then(() => { res.send(stdout + stderr)})
            .catch(err => {
                res.status(500).send({
                    message:
                      err.message || "Cannot save executed command."
                  });
            })
        }
      });
};