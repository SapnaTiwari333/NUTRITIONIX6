const express =require('express'); //initialize the app


const body_parser =require('body-parser');


const userRouter = require('./routes/user.router');

const app=express();

app.use(body_parser.json());

app.use('/',userRouter);

module.exports=app;