//👇🏻  Query Selectors here

var titleInput = document.getElementById('user-title');
var bodyInput = document.getElementById('user-body');
var saveButton = document.getElementById('save-button');
var disableSaveButton = document.getElementById('save-button-disabled')
var cardSection = document.getElementById('idea-card-grid');
var newCardInput = document.getElementById('card-body');
var showStarredIdeasButton = document.getElementById('starred-ideas-button');
var searchBar = document.getElementById('search-bar');

//👇🏻  Event Listeners

window.addEventListener('load', disableButton);

titleInput.addEventListener('input', toggleSaveButton);
bodyInput.addEventListener('input', toggleSaveButton);

saveButton.addEventListener('click', function(event) {
    event.preventDefault();
    checkInputFields();
});

cardSection.addEventListener('click', function(event) {
    deleteCard(event);
    starIdea(event);
});

showStarredIdeasButton.addEventListener('click', function() {
    togglePageView();
});

searchBar.addEventListener('keyup', filterCards);

//👇🏻 Global Variables

var userIdeas = [];
var newIdeas;
var starImage;
var onHomePage = true;

//👇🏻 Functions

function toggleSaveButton() {
    if (titleInput.value && bodyInput.value) {
        enableButton();
    } else {
        disableButton();
    }
};

function disableButton() {
    disableSaveButton.disabled = true;
    saveButton.classList.add('hidden');
    disableSaveButton.classList.remove('hidden');
};

function enableButton() {
    saveButton.disabled = false;
    saveButton.classList.remove('hidden');
    disableSaveButton.classList.add('hidden');
};

function checkInputFields() {
    if (titleInput.value && bodyInput.value) {
        runSavedIdea();
        titleInput.value = "";
        bodyInput.value = "";
    }
};

function runSavedIdea() {
    createIdea();
    addToList(newIdeas);
    displayCard(userIdeas);
};

function createIdea() {
    newIdeas = new Idea(titleInput.value, bodyInput.value);
};

function addToList(newIdeas) {
    userIdeas.push(newIdeas);
};

function displayCard(array) {
    cardSection.innerHTML = "";
    for (var i = 0; i < array.length; i++) {
        if (array === userIdeas) {
            getThisStarShitToWork(i);           
        }
        cardSection.innerHTML +=
        `<section class="idea-card" id="${array[i].id}">
            <div class="card-header">
                <button class="star-button">
                    <img class="inactive-star" src=${starImage} id="${array[i].id}">
                </button>
                <button class="delete-button" id="${array[i].id}"></button>
            </div>
            <div class="card-body" id="card-body">
                <h1 class="idea-title">${array[i].title}</h1>
                <p class="idea-message">
                    ${array[i].body}
                </p>
            </div>
            <div class="card-footer">
            </div>
        </section>`;
    }
    disableButton();
};

function deleteCard(event) {
    if (event.target.className === "delete-button") {
        for (var i = 0; i < userIdeas.length; i++) {
            if (Number(event.target.id) === userIdeas[i].id) {
                userIdeas.splice(i, 1);
            }
        }
        displayCard(userIdeas);
    }
};

function starIdea(event) {
    if (event.target.className === "inactive-star") {
        for (var i = 0; i < userIdeas.length; i++) {
            if (Number(event.target.id) === userIdeas[i].id) {
                userIdeas[i].updateIdea();
            }
        }
        displayCard(userIdeas);
    } 
};

function getThisStarShitToWork(i) {
    if (userIdeas[i].star === true) {
        starImage = "./assets/star-active.svg";
        return starImage;
    } else if (userIdeas[i].star === false) {
        starImage = "./assets/star.svg";
        return starImage;
    }
};

function showStarredIdeas() {
    cardSection.innerHTML = "";
    for (var i = 0; i < userIdeas.length; i++) {
        if(userIdeas[i].star) {
            getThisStarShitToWork(i);
            cardSection.innerHTML +=
            `<section class="idea-card" id="${userIdeas[i].id}">
                <div class="card-header">
                    <button class="star-button">
                        <img class="inactive-star" src=${starImage} id="${userIdeas[i].id}">
                    </button>
                    <button class="delete-button" id="${userIdeas[i].id}"></button>
                </div>
                <div class="card-body" id="card-body">
                    <h1 class="idea-title">${userIdeas[i].title}</h1>
                    <p class="idea-message">
                        ${userIdeas[i].body}
                    </p>
                </div>
                <div class="card-footer">
                </div>
            </section>`;
        }
    }
};

function togglePageView() {
    if (onHomePage === true) {
        onHomePage = false;
        showStarredIdeasButton.innerText = "Show All Ideas";
        showStarredIdeas();
    } else if (onHomePage === false) {
        onHomePage = true;
        showStarredIdeasButton.innerText = "Show Starred Ideas"; 
        displayCard(userIdeas);
    }
};

function filterCards() {
    var searchFilter = [];
    for (var i = 0; i < userIdeas.length; i++) {
        if (userIdeas[i].title.includes(searchBar.value.toLowerCase()) || userIdeas[i].body.includes(searchBar.value.toLowerCase())) {
            searchFilter.push(userIdeas[i]);
        } 
    }
    displayCard(searchFilter);
};