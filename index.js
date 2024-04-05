const addBook = document.querySelector("#add");
const form = document.querySelector("#form");
const subBtn = document.querySelector("#submit");

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
  console.log(title, author, pages);
});
