//external import
const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const path = require("path");

//internal import
const {notFoundHandler, errorHandler} = require("./middlewares/common/errorHandlers")
const getAllData = require("./controller/client/home.controller")
// const getLaptop = require("./controller/laptop.controller")
// const {allPhones, phone} = require("./controller/phone.controller")
// const getWatch = require("./controller/watch.controller");

const clientRoutes =  require('./routes/client/routes')
const adminRoutes =  require('./routes/admin/routes')


//Create Express APP
const app = express();

//.env configaration
dotenv.config();

// set view engine js
app.set("view engine", "ejs");

//Database connection (mongodb => mongoose)
mongoose.connect(process.env.DATABASE_STRING, {
            // useNewUrlParser: true,
            // useUnifiedTopology: true,
            // useCreateIndex: true,
            // useFindAndModify: false
        })
    .then(() => {console.log("Database connection successful")})
    .catch(err => {
        console.log("failed to connect database")
        console.log(err)
        
    });

//Request parsers 
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//set static folder
app.use(express.static(path.join(__dirname, "public")))


//routing setup
app.get("/", getAllData);

app.use("/client",clientRoutes);
app.use("/admin", adminRoutes);

//404 not found handler
app.use(notFoundHandler);

//common handling
app.use(errorHandler);

//Server Listen
app.listen(process.env.PORT, () => {
    console.log(`Server running at post http://localhost:${process.env.PORT}`)
});