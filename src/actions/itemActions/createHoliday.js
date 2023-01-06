"use strict";
const https = require('https')

module.exports.createHolidays = async (models,reqBody) => {
  try {
    const result = await getRequest(reqBody);
    for( let i=0;i<result.count;i++){
      await models.countries_holidays.create({
        country : reqBody.country,
        name : result.holidays[i].name,
        date : result.holidays[i].date,
        year : reqBody.year,
      });
    }
    return {
      statusCode: 200,
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(result),
    };
  } catch (error) {
    console.log('Error is: 👉️', error);
    return {
      statusCode: 400,
      body: error.message,
    };
  }
}

function getRequest(reqBody) {
  const url = 'https://api.world-holidays.info/holidays?country='+reqBody.country+'&year='+reqBody.year;
  return new Promise((resolve, reject) => {
    const req = https.get(url, res => {
      let rawData = '';

      res.on('data', chunk => {
        rawData += chunk;
      });

      res.on('end', () => {
        try {
          resolve(JSON.parse(rawData));
        } catch (err) {
          reject(new Error(err));
        }
      });
    });

    req.on('error', err => {
      reject(new Error(err));
    });
  });
}