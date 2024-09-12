let promise = new Promise((resolve, reject) => {
    console.log("pending");

    setTimeout(() => {
        console.log("this is the first promise");
        resolve(44);  // Resolve the promise with a value
    }, 5000);
});

promise
    .then((value) => {
        console.log("Resolved with value:", value); // Log the value from the first promise
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("2nd promise");
                resolve(); // Resolve the second promise
            }, 2000);
        });
    })
    .then(() => {
        return new Promise((resolve) => {
            setTimeout(() => {
                console.log("3rd promise");
                resolve(); // Resolve the third promise
            }, 3000);
        });
    })
    .then(() => {
        return new Promise((_, reject) => {  // Use _ for unused resolve parameter
            setTimeout(() => {
                console.log("error....");
                reject(new Error("THIS IS AN ERROR")); // Reject the promise with an error
            }, 2000);
        });
    })
    .catch((error) => {
        console.log("Caught error:", error.message); // Handle the error
    });

//second example
function ScriptLoader(src) {
  let pr= new Promise((resolve, reject) => {
    setTimeout(() => {
        let element = document.createElement("script");
        element.src = src;
        document.body.appendChild(element);
        element.onload = () => {
            resolve("loading successfull sir");
          };
          element.onerror = () => {
            reject(new Error("fetch to load file from server ..."));
          };
    }, 4000);

  });
  pr.then((value)=>{
    console.log(value);

  }).then(()=>{
    console.log("we are ready for loading new script");

  }).catch((error)=>{
  console.log("some error "+ error);

  })
}

ScriptLoader(
  "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
);




