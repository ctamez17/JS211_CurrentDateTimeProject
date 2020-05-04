// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**


// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.
const displayString = () => {
  var num = 15;
  var n = num.toString();
  document.getElementById("display-string").innerHTML = n;
  
}

// Write a JavaScript program to convert a string to the number.
const displayNumber = () => {
  var word = "42"
  var w = parseInt(word, 10)
  document.getElementById("display-number").innerHTML = w;
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

const dataType = () => {
  const data = document.getElementById("dataEntry").value;
  if (data === "null") {
    document.getElementById("display-type").innerHTML = "null";
  }
  else if (data === "true") {
    document.getElementById("display-type").innerHTML = "boolean";
  }
  else if (data === "false") {
    document.getElementById("display-type").innerHTML = "boolean";
  }
  else if (data === ""){
    document.getElementById("display-type").innerHTML = "undefined";
  }
  else if (data <= Number.MAX_VALUE){
    document.getElementById("display-type").innerHTML = "number";
  }else {
    document.getElementById("display-type").innerHTML = "NaN, " + typeof data;
  }

}

  

  
// Write a JavaScript program that adds 2 numbers together.
const displayAddition = () => {
  var num1;
  var num2;
  var numt = (num1 + num2);

  document.getElementById("display-Addition").innerHTML = numt;
  
}


// Write a JavaScript program that runs only when 2 things are true.
const display2True = () => {
  var num1 = 5;
  var num2 = 10;
  
  if(num1 >= 4)
  {
    if(num2 >= 9)
    {
      //run
    }
  }
}



// Write a JavaScript program that runs when 1 of 2 things are true.
const display1of2 = () => {
  var num1 = 1;
  var num2 = 2;
  if(num1 == 1 OR num2 == 2)
  {
    //run
  }
}


// Write a JavaScript program that runs when both things are not true.  

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
