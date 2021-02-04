import { getHeapCodeStatistics } from 'v8';

const base_api = 'https://www.ndbc.noaa.gov/data/realtime2/';

const buoy_url = (stationId: string) => (base_api + stationId + '.txt')

const axios = require('axios').default;

export default async function getBuoyByID(req, res, next) {
  const {id: buoyId} = req.params
  try {

    const url = buoy_url(buoyId)
    console.log("Calling url: " + url)
    const ret = await axios.get(url);
    const text = JSON.stringify(ret.data)


    return res.send({text})
    
  } catch (e) {
    return res.status(404).send({
      error: `Buoy Station ${buoyId} Not Found`,
      data: e
    })
  }
}
