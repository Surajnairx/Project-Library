const addBook = document.querySelector("#add");
const form = document.querySelector("#form");
const subBtn = document.querySelector("#submit");
const canBtn = document.querySelector("#cancel");
const library = [];

canBtn.addEventListener("click", (event) => {
  event.preventDefault();
  form.style.display = "none";
});

addBook.addEventListener("click", () => {
  if (form.style.display == "" || form.style.display == "none") {
    form.style.display = "block";
  } else {
    form.style.display = "none";
  }
});

subBtn.addEventListener("click", (event) => {
  event.preventDefault();
  const title = document.querySelector("#title").value;
  const author = document.querySelector("#author").value;
  const pages = document.querySelector("#pages").value;
  addBookfn(title, author, pages);
});

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

function addBookfn(title, author, pages) {
  const book = new Book(title, author, pages);
  library.push(book);
  const display = document.createElement("div");
  const h5 = document.createElement("h5");
  h5.textContent = `Title Name : ${title}`;
  const p1 = document.createElement("p");
  p1.textContent = `Author Name :${author}`;
  const p2 = document.createElement("p");
  p2.textContent = `Pages :${pages}`;
  display.setAttribute("class", "book-display");
  display.appendChild(h5);
  display.appendChild(p1);
  display.appendChild(p2);
  const mainDisplay = document.querySelector(".display-block");
  mainDisplay.appendChild(display);
}
