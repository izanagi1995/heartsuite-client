# heartsuite-client

*heartsuite-client is the client that sends heartbeat to a heartsuite-server*

## Usage

```javascript
const HeartSuiteClient = require('heartsuite-client');
const server = "localhost"; //Server IP
const port = 23232; //Server port
const interval = 3000; //Heartbeat interval (ms)
const data = {}; //Additional data to be send to the server

let client = new HeartSuiteClient(server, port, interval, data);

client.on('beat', function(time){
  console.log(`Beat sent : ${time}`);
});
```

## Issues
- Feature request : tag [Feature]
- Issue : please describe the problem and give steps to reproduce
## Pull request
- Use 2-space tabs
