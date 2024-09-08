const bookListContainer = document.getElementById("book-list");
const searchInput = document.getElementById("searchInput");
const searchButton = document.querySelector('button'); // Select the search button

// Assuming your data is already available in a JavaScript object called 'dados'
const books = dados; // Replace 'dados' with the actual object name

function fetchBookList() {
  const searchTerm = searchInput.value.toLowerCase();

  // Filter books based on the search term (assuming "name" property exists)
  const filteredBooks = books.filter(book => {
    return book.name.toLowerCase().includes(searchTerm);
  });

  // Clear the list before adding new items
  bookListContainer.innerHTML = "";

  // Add filtered books to the list
  filteredBooks.forEach(book => {
    const bookItem = document.createElement("p");
    bookItem.style.fontFamily = "Arial, sans-serif";
  bookItem.style.fontSize = "16px";
  bookItem.style.color = "#333";
  bookItem.style.marginBottom = "10px";


    // Assuming "name" and potentially other properties exist in book objects
    bookItem.textContent = `${book.chapters}`; // Adjust property names as needed
    
    const bookTitle = document.createElement("h3");
    bookTitle.textContent = `${book.name}`; // Adjust property names as needed
    
    bookListContainer.appendChild(bookTitle);
    bookListContainer.appendChild(bookItem);
  });
}

// Call the function initially to load the full list
fetchBookList();

// Add an event listener to update the list when the user clicks the button
searchButton.addEventListener("click", fetchBookList);
