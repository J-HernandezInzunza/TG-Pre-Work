class Media {
    constructor(title, ratings, isCheckedOut) {
        this._title = title;
        this._rating = ratings;
        this._isCheckedOut = isCheckedOut;
    }
    //Basic getter and setters
    get rating() {
        return this._rating;
    }
    get title() {
        return this._title;
    }
    get isCheckedOut() {
        return this._IsCheckedOut;
    }
    //Other methods
    getAverageRating() {
        let ratingsSum = 0;
        for (let i = 0; i < this._rating.length; i++) {
            ratingsSum += this._rating[i];
        }
        return (ratingsSum / (this._rating.length));
    }

    toggleCheckOutStatus() {
        if (this._isCheckedOut === true) {
            this._isCheckedOut = false
        } else if (this._isCheckedOut === false) {
            this._isCheckedOut = true
        }
    }

    addRating(score) {
        this._rating.push(score);
    }
}

class Book extends Media {
    constructor(author, title, pages, ratings, isCheckedOut) {
        super(title, ratings, isCheckedOut);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }
    get pages() {
        return this._pages;
    }
}

const poops = new Book('Me', 'poops the book', 365, [5], true);

console.log(poops.getAverageRating());