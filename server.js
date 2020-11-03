const express = require("express");
const app = express();
const morgan = require("morgan");
const carsBank = require("./carsBank.js");

const carModels = require("./views/carsBank");

app.use(morgan("dev"));

app.get("/", (req, res) => {
  const cars = carsBank.list();
  const html = `<!DOCTYPE html>
    <html>
    <head>
    <body>
    <ul>
    ${cars.map((car) => `<li> ${cars.model}</li>`)}
    </ul>
    </body>
    </head>
    </html>`;
  res.send(html);
});

const PORT = 2020;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
