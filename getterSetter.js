class buisness {
  constructor(name) {
    this.name = name;
  }

  fly() {
    console.log(`mai ud rha hu`);
  }

  get name() {
    return this._name;
  }

  set name(c) {
    this._name = c;
  }
}

let b = new buisness();

b.fly();
b.name = "jack";
console.log(b.name);
