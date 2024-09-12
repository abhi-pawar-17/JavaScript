class abhi {
  constructor(sirname, name) {
    this.sirname = abhi.capitalize(sirname);
    this.name = abhi.capitalize(name);
  }

  abhiName() {
    console.log(`abhi sirname is ${this.sirname}`);
  }
  shubhname() {
    console.log(`${this.name} sirname is pawar `);
  }

  static capitalize(sirname) {
    return sirname.toUpperCase();
  }
}

let a = new abhi("pawar", "shubham");

a.abhiName();
a.shubhname();
