'use strict'


function Post(author, text, date) {
    this.author = author;
    this.text = text;
    this.date = date;
}

Post.prototype.edit = function (text) {
    this.text = text
};

function AttachedPost(author, text, date) {
    Post.call(this, author, text, date);
    this.highlighted = false;
}

AttachedPost.prototype = Object.create(Post.prototype);
AttachedPost.prototype = AttachedPost;

AttachedPost.prototype.makeTextHighlighted = function () {
    this.highlighted = true;
};

const attached1 = new AttachedPost('admin', 'lorem ipsum', new Date());
console.log(attached1);
attached1.makeTextHighlighted();
attached1.edit('dolor sit');
console.log(attached1);