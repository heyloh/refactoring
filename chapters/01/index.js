const plays = require("./plays.json");
const invoices = require("./invoices.json");
const statement = require("./statement");

for (const invoice of invoices) {
  console.log(statement(invoice, plays));
}
