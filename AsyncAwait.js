async function Controller() {
  let promise1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(6000);
    }, 5000);
  });

  let promise2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(3000);
    }, 6000);
  });

  let pro1 = await promise1;
  let pro2 = await promise2;

  return [pro1, pro2];
}

const demo = async () => {
  console.log("i am demo function");
};

async function ex() {
  let a = await Controller();
  console.log(a);

  let d = await demo();
  console.log(d);
}
ex();
