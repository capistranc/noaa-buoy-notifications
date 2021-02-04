const express = require('express')
require('dotenv').config();

const PORT = process.env.PORT || "8080"
import getBuoyByID from './lib/noaa/getBuoyByID';
// const getLatest = require('./lib/noaa/getLatest')


const app = express()

app.get('/', async (req:any, res:any, next:Function) => {

  //  const ret = await getBuoyByID(req,res,next)
  //  console.log(ret)

  
  
  
  res.send("HELLO");
  console.log("REST")
})

// app.get('/buoys/recent', getLatest)

  app.get('/buoy/:id', getBuoyByID)

app.listen(PORT, () => {
  console.log(`Server Online: localhost:${PORT}`)
})