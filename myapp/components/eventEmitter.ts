class EventEmitter {
    events: { [key: string]: Function[] } = {};
  
    on(event: string, listener: Function) {
      (this.events[event] || (this.events[event] = [])).push(listener);
    }
  
    emit(event: string, arg: any) {
      (this.events[event] || []).forEach(listener => listener(arg));
    }
  }
  
  export const eventEmitter = new EventEmitter();
  