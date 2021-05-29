//Instructions: Define a function called introduction that defines 
// a parameter, name, and returns the phrase: "Hi, my name is ${name}."//



function say(name){
    console.log(`Hi, my name is, ${name}!`);
}

say("Lisa");



  function logTwoValues(name, language) {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  } 

  logTwoValues("Lisa", "JS");


  function logTwoValues(name = "user", language = "JavaScript") {
    console.log(`Hi, my name is ${name} and I am learning to program in ${language}.`);
  } 

  logTwoValues("Lisa", "JS");


