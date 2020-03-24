// npm modules
const API_KEY = require('./key.js');
const redis = require('redis');
const redisClient = redis.createClient();
const https = require('https');

// redis client for local instance
/*
// API endpoints
const QuoteEndPoint = 'https://www.alphavantage.co/query?function=GLOBAL_QUOTE'
const ticker = 'MSFT';

https.get(`${QuoteEndPoint}&symbol=${ticker}&apikey=${API_KEY}`, (res) => {
    if(res.statusCode != 200){
        console.error("request failed, status code = " + res.statusCode);
    }

    res.setEncoding('utf-8');
    let rawData = '';
    res.on('data', (chunk) => {
        rawData += chunk;
    })
    res.on('end', () => {
        try {
            const parsedData = JSON.parse(rawData);
            console.log(parsedData);
        } catch (err) {
            console.error("failed to parse output to JSON, error: " + err);
        }
    })
}).on('error', (err) => {
    console.error(err);
});*/

const data = { 'Global Quote': 
{ '01. symbol': 'MSFT',
  '02. open': '146.0000',
  '03. high': '147.1000',
  '04. low': '135.8600',
  '05. price': '137.3500',
  '06. volume': '84866215',
  '07. latest trading day': '2020-03-20',
  '08. previous close': '142.7100',
  '09. change': '-5.3600',
  '10. change percent': '-3.7559%' } }

const getTicker = (ticker) => {
    redisClient.get()
};

const setTicker = (ticker, data) => {
    redisClient.set(ticker, JSON.stringify(data), 60, (err) => {
        if(err){
            console.error(err);
            process.exit();
        }
    });
};