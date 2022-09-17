const express=require('express')
const path=require('path')
require('dotenv').config()
const app=express()
app.use(express.static(path.join(__dirname,'public')))
const port_number = process.env.PORT || 5000
const host = '0.0.0.0';
app.listen(port_number,host,()=>{
    console.log('server is run');
}) 