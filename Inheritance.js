class Father {
  color() {
    console.log("color is white");
  }
  height() {
    console.log("height is 5.5");
  }
}

class Abhi extends Father {
  hobby() {
    console.log("playing hockey ");
  }
}

class Shubham extends Father {
  hobby() {
    console.log("playing cricket");
  }
}

let f = new Father();

f.color();
f.height();

let a = new Abhi();

a.color();
a.height();
a.hobby();

let s = new Shubham();

s.color();
s.height();
s.hobby();
