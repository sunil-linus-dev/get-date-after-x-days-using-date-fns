const date = require("./index");

const format = require("date-fns/format");
const result = format(date, "dd-MM-yyyy");
console.log(result);
