
//👇🏻  Query Selectors here

var titleInput = document.getElementById('user-title');
var bodyInput = document.getElementById('user-body');
var saveButton = document.getElementById('save-button');
var cardSection = document.getElementById('idea-card-grid');
var newCardInput = document.getElementById('card-body');

//👇🏻  Event Listeners

saveButton.addEventListener('click', function (event) {
    event.preventDefault();
    checkInputFields();
});

//👇🏻 Global Variables

var userIdeas = [];
var newIdeas;

//👇🏻 Functions

//when user clicks save button check to see if both values are present 

function checkInputFields () {
    if (titleInput.value && bodyInput.value) {
        runSavedIdea();
        titleInput.value = "";
        bodyInput.value = "";
    // } else {
    //     saveButton.disable = true;
    }
}

function runSavedIdea() {
    createIdea();
    addToList(newIdeas);
    displayCard();
}

function createIdea() {
    newIdeas = new Idea(titleInput.value, bodyInput.value)
}

function addToList(newIdeas) {
    userIdeas.push(newIdeas);
}

function displayCard() {
    cardSection.innerHTML += 
    `<section class="idea-card" id="idea-card1">
        <div class="card-header">
            <button class="star-button">
                <img class="in-active-star" src="./assets/star.svg">
                <img class="active-star hidden" src="./assets/star-active.svg">
            </button>
            <button class="delete-button">
                <img class="inactive-delete" src="./assets/delete.svg">
                <img class="active-delete hidden" src="./assets/delete-active.svg">
            </button>
        </div>
        <div class="card-body" id="card-body">
            <h1 class="idea-title">${newIdeas.title}</h1>
            <p class="idea-message">
                ${newIdeas.body}
            </p>
        </div>
        <div class="card-footer">
            <button class="comment-button">
                <img class="add-comment" src="./assets/comment.svg">
            </button>
            <h2 class="idea-comment">Comment</h2>
        </div>
    </section>`
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