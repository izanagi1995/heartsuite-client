const dgram = require('dgram');
const EventEmitter = require('events');
const now = require("performance-now");

class HeartClient extends EventEmitter{
  constructor(server, port, interval, data){
    super();
    this.server = server;
    this.port = port;
    this.interval = interval;
    this.data = data || {};
    this.lastBeat = -1;

    this.socket = dgram.createSocket('udp4');
    require('getmac').getMac((err,macAddress) => {
      if (err) throw err
      this.data.id = macAddress;
      setTimeout(this.send.bind(this), this.interval);
    });
  }

  send(){
    var startTime = now();
    if(this.lastBeat == -1){
      this.data.new = true;
      this.data.lastBeat = now();
    }else{
      this.data.new = false;
      this.data.lastBeat = this.lastBeat;
    }
    this.socket.send(JSON.stringify(this.data), this.port, this.server, (err) => {
      this.lastBeat = now();
      this.emit('beat', this.lastBeat);
      setTimeout(this.send.bind(this), this.interval - (this.lastBeat - startTime));
    });
  }
}

module.exports = HeartClient;
