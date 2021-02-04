"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const express = require('express');
require('dotenv').config();
const PORT = process.env.PORT || "8080";
const getBuoyByID_1 = require("./lib/noaa/getBuoyByID");
// const getLatest = require('./lib/noaa/getLatest')
const app = express();
app.get('/', (req, res, next) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    //  const ret = await getBuoyByID(req,res,next)
    //  console.log(ret)
    res.send("HELLO");
    console.log("REST");
}));
// app.get('/buoys/recent', getLatest)
app.get('/buoy/:id', getBuoyByID_1.default);
app.listen(PORT, () => {
    console.log(`Server Online: localhost:${PORT}`);
});
