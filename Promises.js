
let prom = new Promise((resolve,reject)=>{
       console.log("pending..");
       
setTimeout(() => {
    resolve(true)  //for resolve 
    // reject(new Error("something else here")); for Reject
}, 2000);

})

//for handle promise is reoslve or reject 

prom.then((value)=>{ // for handle result true or false 
    console.log(value);
    
},(error)=>{
    console.log(error); //for handle errors 
    
})
