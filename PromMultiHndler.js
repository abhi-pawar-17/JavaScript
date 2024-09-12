let promise = new Promise((resolve, reject) => {
    console.log("loading....");
  
    setTimeout(() => {
      resolve(200);
    }, 3000);
  });
  
  promise.then(()=>{
    console.log("second");
    
  })
  promise.then(()=>{
    console.log("third");
    
  })