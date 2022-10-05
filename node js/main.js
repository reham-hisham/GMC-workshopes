const yargs = require("yargs");

const controller = require("./controller");
const { argv } = yargs;
const {command,title,body} = argv

switch (command) {
  case "add":
    controller.add(title, body);
    break;
  case "delete":
    controller.deletenote(title);
    break;
  case "view all":
    controller.ViewAll();
    break;
  case "view":
    controller.showSingleNote(title);
    break;

  default:
    console.log(" I can't understand your command");
    break;
}
