const fs = require("fs");
const path = require("path");
const express = require("express");
const app = express();
// const morgan = require("morgan");
const carsBank = require("./carsBank");

// const list = () => {
//   return [...data]; //returning a copy of the arrary
// };
// const find = (id) => {
//   const post = data.find((post) => post.id === +id);
// };

// app.use(morgan("dev"));

app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  const html = `<!DOCTYPE html>
    <html>
    <head>
    </head>
    <h1>
    Car Inventory
    </h1>
    <body>
<div class="container1">
${carsBank.data
  .map(
    (car) =>
      `<div class="content"> <h3><a href=/car/${car.id}>${car.model}</a></h3></div>`
  )
  .join("")} 
    </body>
    </html>`;
  res.send(html);
});

app.get("/car/:id", (req, res) => {
  //use carId as parameter and find it in the data using the function .find()
  //create a variable such as consCar = carsBank.data.find()
  ///camera/:cameraId"
  const camera = data.cameras.find((c) => c.cameraId === req.params.cameraId);
  const html = `<!DOCTYPE html>
      <html>
      <head>
      </head>
      <h1>
      Car Inventory
      </h1>
      <body>
  <div class="container1">
 
      </body>
      </html>`;
  res.send(html);
});

const PORT = 2020;
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
