
class Idea {
    constructor(title, body) {
        this.title = title;
        this.body = body;
        this.id = Date.now();
        this.star = false;
    }
    updateIdea() {
        if (this.star === false) {
            this.star = true;
        } else if (this.star === true) {
            this.star = false;
        }
    }
}

// star button id is star-button
//add this id ^^ to the html