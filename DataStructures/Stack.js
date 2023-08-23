// stack implimentation using array

export default class Stack {
    constructor() {
      this.items = [];
    }

    push(item) {
      return this.items.push(item);
    }

    pop() {
      return this.items.pop();
    }
  
    isEmpty() {
      return this.length() === 0;
    }

    peek() {
      return this.isEmpty() ? undefined : this.items[this.length() - 1];
    }

    length() {
      return this.items.length;
    }
  }