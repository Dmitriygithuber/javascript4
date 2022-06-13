'use strict'

class Post {
    constructor(author, text, date) {
        this.author = author;
        this.text = text;
        this.date = date;
    }

    edit(text) {
        this.text = text;
    }
}

class AttachedPost extends Post {
    constructor(author, text, date) {
        super(author, text, date);
        this.highlighted = false;
    }

    makeTextHighlighted() {
        this.highlighted = true;
    }
};

const attached1 = new AttachedPost('admin', 'lorem ipsum', new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit('dolor sit');
console.log(attached1);