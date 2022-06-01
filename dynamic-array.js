class DynamicArray {

  constructor(size = 4) {

    this.capacity = size;
    this. length = 0;
    this.data = [];

    for (let i = 0; i < size; i++) {
      this.data[i] = undefined;
    }

  }

  read(index) {
    return this.data[index];
  }

  push(val) {
    if (this.data[this.capacity - 1] === undefined) {
      for (let i = 0; i < this.capacity; i++) {
        if (this.data[i] === undefined) {
          this.data[i] = val;
          this.length++;
          return;
        }
      }
    } else {
      this.resize();
      this.push(val);
    }
  }


  pop() {
    for (let i = 0; i < this.capacity; i++) {
      if (this.data[i + 1] === undefined) {
        let popped = this.data[i];
        this.data[i] = undefined;
        if (this.length > 0) {this.length--}
        return popped;
      }
    }
  }

  shift() {
    let shifted = this.data[0];

    for (let i = 0; i < this.capacity - 1; i++) {
      this.data[i] = this.data[i + 1];
    }

    this.data[this.capacity - 1] = undefined;
    if (this.length > 0) {this.length--}
    return shifted;
  }

  unshift(val) {

    if (this.data[this.capacity - 1] === undefined) {
      for (let i = this.capacity - 1; i > 0; i--) {
        this.data[i] = this.data[i - 1];
      }

      this.data[0] = val;
      this.length++;
      return;

    } else {
      this.resize();
      this.unshift(val);
    }
  }

  indexOf (val) {
    for(let i = 0; i < this.capacity; i++) {
      if (this.data[i] === val) {return i}
    }

    return -1;
  }

  resize () {
    const copy = [];
    this.capacity *= 2;

    for (let i = 0; i < this.capacity; i++) {
      if (i < this.data.length) {
        copy[i] = this.data[i];
      } else {
        copy[i] = undefined;
      }
    }

    this.data = copy;
  }

}

let test = new DynamicArray();

console.log(test.data);

module.exports = DynamicArray;
