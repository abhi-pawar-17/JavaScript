let promise1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    
    reject(new Error("ERROR!"))
  }, 1000);
});
let promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("two")
  }, 2000);
});

let promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("three")
  }, 3000);
});


// promise1.then((value)=>{
//     console.log(value);
    
// })
// promise2.then((value)=>{
//     console.log(value);
    
// })
// promise3.then((value)=>{
//     console.log(value);
    
// })


let all_promises = Promise.reject([promise1 , promise2 , promise3]);


all_promises.then((value)=>{
    
    console.log(value);
    
})


// 7pi46FuX%UrxBi