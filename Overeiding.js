class buisness {
  icon(gname) {
    console.log(`company name is ${gname}`);
  }
}

class Abhi extends buisness {
  icon(gname) {
    super.icon(gname);
  }
}

const a = new Abhi();

a.icon("icon");
