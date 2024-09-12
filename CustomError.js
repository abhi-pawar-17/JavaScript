try {
  let age = prompt("enter your age :");
  let con = parseInt(age);

  if (age > 100) {
    throw new Error("faild");
  }
  console.log("also running");
} catch (error) {
  console.log(error);
} finally {
  console.log("this is used for always run ");
}
