//class
class Booking {
  constructor(pname, trname) {
    this.tname = pname;
    this.trainname = trname;
    console.log(this.tname + " your seat is booked " + this.trainname);
  }
}

//object

let abhi = new Booking("abhi", "201");
let shubh = new Booking("shubham", "333");
let ronny = new Booking("rohit", "543");
let patu = new Booking("prathmesh", "312");

name();
