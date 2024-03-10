let exampleList = [];  // List of all tasks
let stringVariable = "";

let dictionaryOfLists = {
    "entry1": [['FirstA', 'Text'],
    ['FirstB', 'More text']],
    "entry2": [['SecondA', 'Blah blah'],
    ['SecondB', 'Blah blah blah blah']]
}

// Task-object
class Task {
  constructor(date) {
    this.date = date; 
  }

  deltaTime() { // Time since date
    let now = new Date();
    if (this.date != '') {
      return now - this.date;  // Return difference in milli seconds
    }
  }
}


// Runs when the page is loaded:
function setUpFunc() {

  doWhateverAtStartUp();

  // Set the size of the contentContainer
  document.getElementById('contentContainer').style.height = window.innerHeight - 300 + 'px'; 
  // Give the inputBox focus
  document.getElementById('inputBox').focus();
}


function doWhateverAtStartUp() {
  // Pass
}




function storeLocally() {
    // Store exampleList in a local storage on each browser the page is opened in
    if (exampleList) {
        localStorage.exampleList = JSON.stringify(exampleList);
    }
}


function retrieveLocallyStoredStuff() {
    // Get exampleList from a local storage, if it exist
  if (localStorage.getItem('exampleList')) {
      let list = JSON.parse(localStorage.exampleList);
    }
}

// Show useful code snippets
function exampleFunction() {
    let numberVar = 1;
    let stringVar = 'rap';
    let anotherNumber = 6;

    if (0 < numberVar && (stringVar == '' || anotherNumber != 5)) {
        // Pass
    } else if (5 < exampleList.length) {
        // Pass
    }  else {
        // Pass
    }
    
    for (let i = 1; i < 10; i++) {
        // Pass
    }
    
    let startList = ['a', 'b', 'c', 'd', 'e'];
    for (const [index, text] of startList.entries()) {
      console.log(index, text);
    }

    // Get text from inputBox and trim leading and trailing spaces. Trim does not change the original string
    let inputText = document.getElementById('inputBox').value.trim();
    console.log(inputText);

    // Add a new button and set buttontext to inputText
    let newButton = document.createElement('button');
    let counter = 3;
    newButton.setAttribute('id', 'button' + counter);
    newButton.classList.add('newButton');
    newButton.textContent = inputText.text;

    let moreText = dictionaryOfLists['entry1'][1][1];
    console.log(moreText)

    let newTask = new Task(new Date(2023, 11, 13, 12, 0));
    newTask.var = 'Some data';  // Attach data to an object
    console.log(newTask.deltaTime(), newTask.var)

    if (document.getElementById('inputBox').classList.contains('active')) {
        document.getElementById('exampleButton').classList.remove('someClass');
        document.getElementById('exampleButton').classList.add('someOtherClass');
    }
    
    let now = new Date();
    let hours = now.getHours();
    let min = now.getMinutes();
    let sec = now.getSeconds();

    console.log(hours, min, sec);

    let christmas = new Date(2024, 11, 24, 12, 30, 0);
    console.log(christmas);


    // Call function from within function
    sayRap();
}

 
function sayRap() {
    // Print rap and an arrow in the console (Press ctrl+shift+i to see the inspector and the console in most browsers)
    console.log('rap ' + '\u25B8' + '\n' + 'rap'); // \n is the newline character
}

// Start a listener to exampleButton to run the function sayRap when the button is pressed
document.getElementById('exampleButton').addEventListener('click', sayRap);
// Same, but with a local function not defined anywhere else
document.getElementById('exampleButton').addEventListener('click', function() { if (3 < 4) {console.log('Bip!');}; sayRap(); });

// If the function needs input from the pressed button
document.getElementById('exampleButton').addEventListener('click', this.exampleFunc, false);
function exampleFunc(event) {
  let btnId = event.target.id;  

  if (btnId === 'exampleButton') {
    // Pass
  } else {
    // Pass
  }
}

// Add nodes to the DOM with code:
// Write fillDiv() in the console to see 10 buttons added to the page
function fillDiv() {
  // Remove old content
  let someDiv = document.getElementById('someDiv');
  while (someDiv.firstChild) {
    let someDiv = document.getElementById('someDiv');
    someDiv.removeChild(someDiv.lastChild)
  }

  for (let i = 0; i < 10; i++) {
    let newNode = document.createElement('button');

    textPart = document.createElement('span');
    textPart.textContent = 'Rap'+ i;
    newNode.classList.add('rap');
    newNode.appendChild(textPart);

    someDiv.appendChild(newNode);
  }
}




