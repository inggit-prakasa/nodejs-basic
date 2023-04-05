const { EventEmitter } = require('events');
 
const myEventEmitter = new EventEmitter();
 
const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
  }
   
myEventEmitter.on('happy-birthday', birthdayEventListener);
   
myEventEmitter.emit('happy-birthday', "Inggit")