//

class EventEmitter {
  constructor() {
    this.events = {};
  }

  // register event
  on(event, listener) {
    if (!this.events[event]) {
      this.events[event] = [];
    }
    this.events[event].push(listener);
  }

  // remove event
  off(event, listener) {
    if (this.events[event]) {
      this.events[event] = this.events[event].filter((l) => l != listener);
    }
  }

  // emit event
  emit(event, ...args) {
    if (this.events[event]) {
      this.events[event].forEach((listener) => listener(...args));
    }
  }
}


//Usage

const emitter = new EventEmitter();

function listener1(data) {
    console.log('Listener 1:', data);
}
function listener2(data) {
    console.log('Listener 2:', data);
}

emitter.on('event1', listener1);
emitter.on('event1', listener2);

emitter.emit('event1', 'Event data');

emitter.off('event1', listener1);
// emitter.off('event1', listener2);

emitter.emit('event1', 'Event data');