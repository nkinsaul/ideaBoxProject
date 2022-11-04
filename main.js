//👇🏻  Query Selectors here

var titleInput = document.getElementById('user-title');
var bodyInput = document.getElementById('user-body');
var saveButton = document.getElementById('save-button');
var disableSaveButton = document.getElementById('save-button-disabled')
var cardSection = document.getElementById('idea-card-grid');
var newCardInput = document.getElementById('card-body');

//👇🏻  Event Listeners

window.addEventListener('load', disableButton);

titleInput.addEventListener('input', toggleSaveButton);
bodyInput.addEventListener('input', toggleSaveButton);

saveButton.addEventListener('click', function (event) {
    event.preventDefault();
    checkInputFields();
});

cardSection.addEventListener("click", deleteCard)
//👇🏻 Global Variables

var userIdeas = [];
var newIdeas;

//👇🏻 Functions

function toggleSaveButton() {
    if (titleInput.value && bodyInput.value) {
        enableButton();
    } else {
        disableButton();
    }
}

function disableButton() {
    disableSaveButton.disabled = true;
    saveButton.classList.add('hidden')
    disableSaveButton.classList.remove('hidden')
}

function enableButton() {
    saveButton.disabled = false
    saveButton.classList.remove('hidden')
    disableSaveButton.classList.add('hidden')
}

function checkInputFields() {
    if (titleInput.value && bodyInput.value) {
        runSavedIdea();
        titleInput.value = "";
        bodyInput.value = "";
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
    cardSection.innerHTML = ""
    for (var i = 0; i < userIdeas.length; i++) {
        cardSection.innerHTML +=
            `<section class="idea-card" id="${userIdeas[i].id}">
            <div class="card-header">
                <button class="star-button">
                    <img class="in-active-star" src="./assets/star.svg">
                    <img class="active-star hidden" src="./assets/star-active.svg">
                </button>
                <button class="delete-button">
                    <img class="inactive-delete" src="./assets/delete.svg" id="${userIdeas[i].id}">
                    <img class="active-delete hidden" src="./assets/delete-active.svg">
                </button>
            </div>
            <div class="card-body" id="card-body">
                <h1 class="idea-title">${userIdeas[i].title}</h1>
                <p class="idea-message">
                    ${userIdeas[i].body}
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
    disableButton()
}

function deleteCard(event) {
    if (event.target.className === "inactive-delete") {
        for (var i = 0; i < userIdeas.length; i++) {
            if (Number(event.target.id) === userIdeas[i].id) {
                userIdeas.splice(i, 1)
            }
        }
    }
    displayCard();
}

// -------Pseudocode----//
// we want click the x 
//find the id of that element 
//check the id of that element to the id to the array
//convert that number to a sting
//compare them
//remove that element from the array
//run the display function again

//query select the parent class of the buttons
//set the event handler for the button
//check for button click
//when the unique star button is clicked, change it to red

// function deleteCard(event) {
//     // console.log(event.target.className)
//     // removeCard(event)
//     for (var i = 0; i < userIdeas.length; i++) {
//         if (Number(event.target.id) === userIdeas[i].id) {
//             console.log("hey ids match")
//             userIdeas.splice(i, 1)
//         }
//     }

//     if (event.target.classList.contains("inactive-delete")) {

//         event.target.closest(".idea-card").remove()
//     }

// }