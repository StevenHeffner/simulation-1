const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const app = express();
const pc = require("./controller")
const massive = require('massive');
const chalk = require('chalk');
const con = require('./controller')
require('dotenv').config()

app.use(bodyParser.json());
app.use(cors());

massive(process.env.CONNECTION_STRING).then( db => app.set('db', db) );

app.get("/api/inventory", con.getAll )

app.post("/api/inventory", con.addProd)

















const portChalk = chalk.cyan.underline
const port = 4000;
app.listen(port, () => {
  console.log(portChalk(`listening_on_port_${port}`));
});
