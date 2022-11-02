
//👇🏻  Query Selectors here

var titleInput = document.getElementById('title');
//change this id ^^ later 
var bodyInput = document.getElementById('body');
//change this id ^^ later 
var saveButton = document.querySelector('.save-button');
//add id to this ^^ later

//👇🏻  Event Listeners

saveButton.addEventListener('click', createIdeaCard);
//might need to prevent default on this ^^

//👇🏻 Global Variables
//need an empty variable that will hold all of the instances of 
//our card class
var userIdeas = [];


//👇🏻 Functions

function createIdeaCard(event) {
    event.preventDefault();
    console.log('hi');
}






//query select the parent class of the buttons
//set the event handler for the button
//check for button click
//when the unique star button is clicked, change it to red



// var addNewButton = document.querySelector('.add-new');
// var parent = document.querySelector('.parent');

// addNewButton.addEventListener('click', createButton);

// function showAlert() {
//   alert('You clicked me!');
// }

// function createButton() {
//   var newButton = document.createElement('button');
//   newButton.className = 'click-me';
//   newButton.innerText = "New click me button!";
//   parent.appendChild(newButton);
// }

// parent.addEventListener('click', function (event) {
//   if (event.target.className === 'click-me') {
//     // do your action on your 'button' or whatever it is you're listening for
//     showAlert();
//   }

//   //condition for dlete, star, comment buttons
// });