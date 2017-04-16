"use strict";

var Gpio = require('onoff').Gpio;
var pinGpioNum = 26; // Gpio 26 will be default
var pinWriteValue = 0; // 0 is on, default

if (process.argv.length > 2) {
  // get the gpio number.
  pinGpioNum = process.argv[2];
}

if (process.argv.length > 3) {
  // see if we want to turn this off.
  if (process.argv[3] == "off") {
    pinWriteValue = 1;
  }
}

// get the relay
var relay = new Gpio(pinGpioNum, 'out'); // uses "GPIO" numbering
 
if (pinWriteValue === 0) {
  // turn on the relay
  console.log('Turning the relay on.');
}
else {
  console.log('Turning the relay off.');
}

console.log('Writing ' + pinWriteValue);
relay.writeSync(pinWriteValue); // 0 is on, 1 is off
 
process.on('SIGINT', function () {
  relay.unexport();
});
