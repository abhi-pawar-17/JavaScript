class buisness {
  constructor() {
    console.log(`owner name avi pawar`);
  }

  icon(gname) {
    console.log(`company name is ${gname}`);
  }
}

class Abhi extends buisness {
  constructor() {
    super();
    console.log("new owner : abhi pawar");
  }
  icon(gname) {
    super.icon(gname);
  }
}

const a = new Abhi("avi pawar");

a.icon("icon");
