"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const base_api = 'https://www.ndbc.noaa.gov/data/realtime2/';
const buoy_url = (stationId) => (base_api + stationId + '.txt');
const axios = require('axios').default;
function getBuoyByID(req, res, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { id: buoyId } = req.params;
        try {
            const url = buoy_url(buoyId);
            console.log("Calling url: " + url);
            const ret = yield axios.get(url);
            const text = JSON.stringify(ret.data);
            return res.send({ text });
        }
        catch (e) {
            return res.status(404).send({
                error: `Buoy Station ${buoyId} Not Found`,
                data: e
            });
        }
    });
}
exports.default = getBuoyByID;
