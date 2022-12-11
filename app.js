const addBookBtn = document.getElementById("addBookBtnJs");
const modalWindow = document.getElementById("modalWindowJs");
const submitBookBtn = document.getElementById("submitBookBtnJs");
const bookWrapperjs = document.getElementById("bookWrapperJs");

addBookBtn.addEventListener("click", modalDisplay);
submitBookBtn.addEventListener("click", submitBook);

function modalDisplay() {
  if (modalWindow.classList.contains("hidden")) {
    modalWindow.classList.remove("hidden");
  } else {
    modalWindow.classList.add("hidden");
  }
}
function submitBook() {
  if (modalWindow.classList.contains("modalWindow")) {
    modalWindow.classList.add("hidden");
  }
  function getBookData() {
    const bookTitle = document.getElementById("titleJs");
    const bookAuthor = document.getElementById("authorJs");
    const bookPages = document.getElementById("pagesJs");
    const isBookRead = document.getElementById("isBookReadJs");

    console.log(bookTitle, bookAuthor, bookPages, isBookRead);
  }
  getBookData();
}
