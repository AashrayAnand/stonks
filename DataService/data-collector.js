// npm modules
const ENV = require('./env.js');
const redis = require('redis');
const https = require('https');

const redisClient = redis.createClient();