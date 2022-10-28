// Adapted from guidance for Azure Web environment:
// https://azureossd.github.io/2022/03/10/NodeJS-with-Keep-Alives-and-Connection-Reuse/index.html#httpagent-or-httpsagent-native-node-module

const http = require('http');
const https = require('https');

// or 128 / os.cpus().length if running node across multiple CPUs
const maxTotalSockets = 128;

const httpKeepAliveAgent = new http.Agent({
    keepAlive: true,
    maxSockets: maxTotalSockets,
    maxFreeSockets: maxTotalSockets,
    maxTotalSockets: maxTotalSockets,
    timeout: 60000,
    freeSocketTimeout: 30000,
});

const httpsKeepAliveAgent = new https.Agent({
    keepAlive: true,
    maxSockets: maxTotalSockets,
    maxFreeSockets: maxTotalSockets,
    maxTotalSockets: maxTotalSockets,
    timeout: 60000,
    freeSocketTimeout: 30000,
});

// override the default global agent and also export agents
http.globalAgent = httpKeepAliveAgent;
https.globalAgent = httpsKeepAliveAgent;

module.exports = {
    httpAgent: httpKeepAliveAgent,
    httpsAgent: httpsKeepAliveAgent,
};
