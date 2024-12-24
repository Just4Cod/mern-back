require("dotenv").config();
const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require('cors');

const corsOptions = {
  origin: process.env.ORIGIN,
};

const languageRouter = require("./routes/language.route");
const booksRouter = require("./routes/books.route");
const brandingRouter = require("./routes/branding.route");
const loginRouter = require("./routes/login.route");
const countRouter = require("./routes/count.route");
const tokenService = require("./services/token.service");

const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// app level
app.use(cors(corsOptions));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));


app.use('/login', loginRouter);
app.use('/count', countRouter);

// apply middleware for secure apis
app.use(async(req,res,next)=>{
  if(req.method === "GET"){
    next()
  }
  else if(req.method === "POST" || req.method === "PUT" || req.method === "DELETE"){
    try{
      const isVerified = await tokenService.verifyToken(req,res);
      if(isVerified){
        next();
      }
    }catch(err){
      return res.status(401).send('Authorization header missing');
    }
  }else{
    return res.status(401).send('Method not allowed !');
  }
});

// route level m
app.use('/language', languageRouter);
app.use('/books', booksRouter);
app.use('/branding', brandingRouter);

//http://localhost/register

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
