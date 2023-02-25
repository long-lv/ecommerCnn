const compression = require('compression');
const express = require('express');
const {default : helmet } = require('helmet');
const morgan = require('morgan');
const app = express();
// init middewares 
app.use(morgan('dev'));
app.use(helmet());
app.use(compression());
// init db

// init routes
app.get('/',(req,res,next)=>{
    const strCompress = "hello Js"
    return res.status(200).json({
        message: 'wellCome TipsJs',
        metadata: strCompress.repeat(10000)
    })
})
// handling error

module.exports = app;