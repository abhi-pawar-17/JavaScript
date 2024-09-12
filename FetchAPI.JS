let city = prompt("enter city name :");

let p = fetch(`https://goweather.herokuapp.com/weather/${city}`);

p.then((v) => {
  return v.json();
}).then((v2) => {
  console.log(v2);
  let promise1 = new Promise((resolve, reject) => {
    console.log("loading data...");

    setTimeout(() => {
      let a = v2.description;
      let b = v2.temperature;
      let c = v2.wind;

      let title = document.getElementById("tit");
      let li1 = document.getElementById("one");
      let li2 = document.getElementById("one2");

      title.innerText = a;
      li1.innerText = b;
      li2.innerText = c;
    }, 5000);
  });
});
