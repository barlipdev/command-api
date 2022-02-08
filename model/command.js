module.exports = mongoose => {
    const Command = mongoose.model(
      "command",
      mongoose.Schema(
        {
          command: String,
          output: String
        }
      )
    );
    return Command;
  };