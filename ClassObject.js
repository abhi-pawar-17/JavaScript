class Booking {
  Booking(n, tn) {
    let nam = n;
    let trn = tn;
    let da = nam + " your form is submited for travel in flight  " + trn;

    let list = document.createElement("li");
    list.innerText = da;
    list.style.color = "blue";
    list.className = "sh";
    list.style.padding = "10px";
    document.body.appendChild(list);
  }
}

let rohan = new Booking();
let abhi = new Booking();

function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}
async function runner() {
  await delay(3000);
  abhi.Booking("abhi", 57);

  await delay(6000);
  rohan.Booking("rohan", 101);
}

runner();
