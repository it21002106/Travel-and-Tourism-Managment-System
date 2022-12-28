 
 
 
 const express = require("express"); 
 const mongoose = require("mongoose");
 const bodyParser = require("body-parser");
 const cors = require("cors");
 const dotenv = require("dotenv");
 const app = express();
 require("dotenv").config();



 const stripe = require('stripe')(process.env.SECRET_KET);

 

 const PORT = process.env.PORT || 8070;

 app.use(cors());
 app.use(bodyParser.json()); 

 app.use(bodyParser.urlencoded({ extended: true})); 

 const URL = process.env.MONGODB_URL;

 mongoose.connect(URL, {

    //useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    //useFindAndModify: false

 });
     
 const connection = mongoose.connection;
 connection.once("open", () => {
    console.log("Mongodb Conection Success!");
 })

 const PaymentRouter = require("./routes/Payments.js");
const { route } = require("./routes/Payments.js");
const userRouter = require("./routes/auth.js");

 app.use("/Payment",PaymentRouter);
 app.use("/users",userRouter);



 app.listen(PORT, () => {
     console.log(`Server is up and runing on port number : ${PORT}`)
 })


