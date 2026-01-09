const axios = require('axios');

// Task 10: Get all books using an async callback function
async function getAllBooks() {
    try {
        const response = await axios.get('http://localhost:5000/');
        console.log(JSON.stringify(response.data, null, 4));
    } catch (error) {
        console.error(error);
    }
}

// Task 11: Get book details based on ISBN using Promises
function getBookByISBN(isbn) {
    axios.get(`http://localhost:5000/isbn/${isbn}`)
        .then(response => console.log(response.data))
        .catch(err => console.log(err));
}

// Task 12: Get book details based on Author
async function getBookByAuthor(author) {
    try {
        const response = await axios.get(`http://localhost:5000/author/${author}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
}

// Task 13: Get book details based on Title
async function getBookByTitle(title) {
    try {
        const response = await axios.get(`http://localhost:5000/title/${title}`);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
    }
