const express = require("express");
const bodyParser = require("body-parser");
const postsRouter = require("./routes/orders");
const path = require("path");
const PORT = 8000;
// const controller = require('./controllers/orders');

const app = express();


  app.get("/", (req, res, next) => {
    const file = path.join(__dirname, "public", "index.html");
    res.sendFile(file);
  });

  app.get('/hello/:name?', (req, res) =>
  res
    .append('Access-Control-Allow-Origin', '*')
    .json(
      { message: `Hello ${req.params.name || 'najm'}!` }
    )
);
app.use("/orders", postsRouter);


  app.listen(PORT, () => {
    console.log(`This app runs on port ${PORT}`);
  });
  


// // 
// app.get('/orders', (req, res) => {
//     res.status(200);
//     res.json({ orders: orders});
//     });
// // 