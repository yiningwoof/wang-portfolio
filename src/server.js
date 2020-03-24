const http = require("http");

const hostname = "127.0.0.1";
const port = 3001;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World");
});

var AWS = require("aws-sdk");

var myCredentials = new AWS.CognitoIdentityCredentials({
  IdentityPoolId: "us-east-2:5431bb69-d1f3-4e8f-9a5a-0db9322f9caa"
});

var myConfig = new AWS.Config({
  credentials: myCredentials,
  region: "us-east-2"
});

AWS.config.update({
  accessKeyId: "AKIA2V3KRPTUQKCJSSEK",
  secretAccessKey: "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"
});

AWS.config.getCredentials(function(err) {
  if (err) console.log(err.stack);
  // credentials not loaded
  else {
    console.log("Access key:", AWS.config.credentials.accessKeyId);
    console.log("Secret access key:", AWS.config.credentials.secretAccessKey);
  }
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
