var str = "";
let buttons = document.querySelectorAll(".js-button1");
Array.from(buttons).forEach((button) => {
  button.addEventListener("click", (e) => {
    if (e.target.value == "=") {
      str = document.getElementById("operation").innerText
      result = eval(str);
      document.getElementById("result").innerText = parseInt(result);
      
    } else if (e.target.value == "del") {
      let newString = str.substring(0, str.length - 1);
      document.getElementById("operation").innerText = newString;
      str = newString;
      document.getElementById("result").innerText = "";
    } else if (e.target.value == "c"  ) {
      document.getElementById("result").innerText = "";
      document.getElementById("operation").innerText = "";
      str = "";
    } else {
      str += e.target.value;
      document.getElementById("operation").innerText = str;
    }
  });
});

document.addEventListener("keydown", handleKeyDown);

let currentoperation = "";
let currentinput = "";

function handleKeyDown(event) {
  const key = event.key;

  if (key === "Enter") {
    event.preventDefault();
    evaluateExpression();
  } else if (key == "Escape" || key == "Esc") {
      console.log('wow');
   
    clearCalculator();
  } else if (key === "Backspace") {
    
    deleteLastCharacter();
  } else {
    
    appendToInput(key);
  }
}

function evaluateExpression() {
  
  
  str = document.getElementById("operation").innerText
  result = eval(str); 
  
  document.getElementById("result").innerText = parseInt(result);
  
  
}

function clearCalculator() {
  console.log('hi');
  str = ""
  document.getElementById("result").innerText = "";
  document.getElementById("operation").innerText = "";
  
}
function deleteLastCharacter() {
  let newString = str.substring(0, str.length - 1);
  document.getElementById("operation").innerText = newString;
  str = newString;
  document.getElementById("result").innerText = "";
}
function appendToInput(input) {
  
  document.getElementById("operation").innerText += input
}
