var consoleOpen = false;
var consoleRevealCountdown = 1;
var consoleButtonRevealed = false;
var ENTER_KEYCODE = 13;

var handleKeypress = function(e){
  var character = String.fromCharCode(e.keyCode);
  var element = document.getElementById(character);
  if(element){
    if(character === "x" && !consoleButtonRevealed){
      consoleRevealCountdown--;
      if(consoleRevealCountdown <= 0){
        consoleButtonRevealed = true;
        document.getElementById('oc').className = "h";
      }
    };

    addClassAndRemoveAfter(element, 'jump', 1000);

  } else if(e.keyCode === ENTER_KEYCODE) {
    consoleInput = document.getElementById('ci');
    if(consoleInput.value === "alberto sucks"){
      alert("i know right?");
    }
    consoleInput.value = "";
  };
}
document.addEventListener("keypress", handleKeypress);

var oc = document.createElement('div');
oc.id = 'oc';
document.getElementById("main_text").appendChild(oc);
var openConsole = function(){
  consoleOpen = true;
  var theConsole = document.createElement('div');
  var input = document.createElement('input')
  input.id = 'ci';
  theConsole.appendChild(input)
  document.getElementById('oc').appendChild(theConsole);
}
document.getElementById('oc').addEventListener('click', function(){
  if(!consoleOpen){
    openConsole();
  };
});

var mainTextPointer = 0;
var mainTextDescriptions = [
  "incredible",
  "a great listener",
  "a world renown magician",
  "intelligente",
  "a milano cookie",
  "a capricorn",
  "a face paint enthusiast",
  "awesome",
];
var mainText = document.getElementById('main_text_adj')
var updateMainText = function(){
  mainText.textContent = mainTextDescriptions[mainTextPointer];
  mainTextPointer = (mainTextPointer + 1) % mainTextDescriptions.length
}
mainText.addEventListener('click', function(){
  addClassAndRemoveAfter(mainText, 'fadedown', 1000, updateMainText);
});

var addClassAndRemoveAfter = function(element, theClass, timeToRevert, callback){
  var classWithSpace = " " + theClass;
  var originalClassName = element.className;
  var classes = originalClassName.split(' ');
  var classAlreadyApplied = classes.indexOf(theClass) > -1;
  if(!classAlreadyApplied){
    classAlreadyApplied = true;
    element.className = element.className + classWithSpace;
    setTimeout(function(){
      element.className = originalClassName;
      callback();
    }, timeToRevert)
  }
}
