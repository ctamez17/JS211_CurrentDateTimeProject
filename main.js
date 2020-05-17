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
  let num = 15;
  let n = num.toString();
  document.getElementById("display-string").innerHTML = n;
  
}

// Write a JavaScript program to convert a string to a number.
const displayNumber = () => {
  let word = "42";
  let w = parseInt(word, 10);
  document.getElementById("display-number").innerHTML = w;
}


// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  
  const dataType = () => 
  {
    let data = false;

    if (data === null) 
    {
      document.getElementById("display-type").innerHTML = "null";
    }
    else if (data === true || data === false) 
    {
      document.getElementById("display-type").innerHTML = "boolean";
    }
    else if (data === "")
    {
      document.getElementById("display-type").innerHTML = "undefined";
    }
    else if (data === parseInt(data, 10))
    {
      document.getElementById("display-type").innerHTML = "number";
    }
    else if (data === data.toString())
    {
      document.getElementById("display-type").innerHTML = "string";
    }
    else
    {
      document.getElementById("display-type").innerHTML = "NaN";
    }
  }
  

  
// Write a JavaScript program that adds 2 numbers together.
const displayAddition = () => {
  let num1 = 1;
  let num2 = 3;
  let numt = (num1 + num2);

  document.getElementById("display-addition").innerHTML = numt;
  
}


// Write a JavaScript program that runs only when 2 things are true.
const display2True = () => {
  let num1 = 5;
  let num2 = 10;
  let numt = num1 + num2;
  
  if(num1 >= 1 && num2 >= 1)
  {
    document.getElementById("display-2true").innerHTML = numt;
  }
}



// Write a JavaScript program that runs when 1 of 2 things are true.
const display1of2 = () => {
  let num1 = 1;
  let num2 = 2;
  let numt = num1 + num2;
  if(num1 == 1 || num2 == 2)
  {
    document.getElementById("display-1of2").innerHTML = numt;
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
