// Array of Article Data - with a 4th book added dynamically
const articles = [
    {
        id: 1,
        title: 'Septimus Heap Book One: Magyk',
        date: 'July 5, 2022',
        description:
            'If you enjoy stories about seventh sons of seventh sons and magyk this is the book for you.',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/en/5/5f/Magkycover2.jpg',
        imgAlt: 'Book cover for Septimus Heap 1',
        ages: '10-14',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    },
    {
        id: 2,
        title: 'Magnus Chase Book One: Sword of Summer',
        date: 'December 12, 2021',
        description:
            'The anticipated new novel by Rick Riordan. After Greek mythology (Percy Jackson), Greek/Roman (Heroes of Olympus), and Egyptian (Kane Chronicles), Rick decides to try his hand with Norse Mythology, and the end result is good.',
        imgSrc:
            'https://books.google.com/books/content/images/frontcover/xWuyBAAAQBAJ?fife=w300',
        imgAlt: 'Book cover for Magnus Chase 1',
        ages: '12-16',
        genre: 'Fantasy',
        stars: '⭐⭐⭐⭐'
    },
    {
        id: 3,
        title: "Belgariad Book One: Pawn of Prophecy",
        date: "Feb 12, 2022",
        description:
            "A fierce dispute among the Gods and the theft of a powerful Orb leaves the World divided into five kingdoms. Young Garion, with his 'Aunt Pol' and an elderly man calling himself Wolf --a father and daughter granted near-immortality by one of the Gods -- set out on a complex mission.",
        imgSrc:
            "https://images-na.ssl-images-amazon.com/images/I/41ZxXA+nInL.jpg",
        imgAlt: "Book cover for Pawn of Prophecy",
        ages: "12-16",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    },
    {
        id: 4,
        title: "Harry Potter and the Sorcerer's Stone",
        date: "June 26, 1997",
        description:
            "Harry Potter has never even heard of Hogwarts when the letters start dropping on the doormat at number four, Privet Drive. Addressed in green ink on yellowish parchment with a purple seal, they are swiftly confiscated by his aunt and uncle.",
        imgSrc:
            "https://images-na.ssl-images-amazon.com/images/I/81YOuOGTACL.jpg",
        imgAlt: "Book cover for Harry Potter 1",
        ages: "9-13",
        genre: "Fantasy",
        stars: "⭐⭐⭐⭐⭐"
    }
];

// Returns single article markup string
function articleTemplate(article) {
    return `
        <article class="book-card">
            <div class="book-details">
                <p class="date">${article.date}</p>
                <p class="ages">${article.ages}</p>
                <p class="genre">${article.genre}</p>
                <p class="stars">${article.stars}</p>
            </div>
            <div class="book-content">
                <h2>${article.title}</h2>
                <img src="${article.imgSrc}" alt="${article.imgAlt}">
                <p>${article.description} <a href="#">Read More...</a></p>
            </div>
        </article>
    `;
}

// Map through articles array and inject into DOM container
function renderArticles() {
    const container = document.querySelector('#articlesContainer');
    const articleMarkup = articles.map(article => articleTemplate(article)).join('');
    container.innerHTML = articleMarkup;
}

// Initial Call
renderArticles();
