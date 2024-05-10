const myPromise = new Promise((resolve, reject ) => {
    setTimeout(() => {       //setTimeout function block we have somthing schedule to run in the future
      console.log("Hello friend!"); // and get value out of that future event that happen
      resolve("Here is your ice cream");
      //reject("sorry, no ice cream for you");
    }, 5000 );
  });
  
  myPromise.then((resolveValue) => { // .then help us to get access to the resolve value when called
      console.log("promise seems to be done!");
      console.log(resolveValue);
      return('yo!');// it another promise that need to be called
      
  
  })
  .then((anotherValue) => {
      console.log(anotherValue);
  })
  .catch((error) => {
      console.log(error);
      console.log(myPromise);
  });
  
  console.log('Hello!');
  console.log(myPromise);
  