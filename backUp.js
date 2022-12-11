const addBookBtn = document.getElementById("addBookBtnJs");
const modalWindow = document.getElementById("modalWindowJs");
const submitBookBtn = document.getElementById("submitBookBtnJs");
const bookWrapperjs = document.getElementById("bookWrapperJs");

let library = [];

//
//
function makeModalVisible(event) {
  event.preventDefault();
  if ((modalWindow.classList.contains = "hidden")) {
    modalWindow.classList.remove("hidden");
    addBookBtn.classList.add("hidden");
  } else console.log("error");
}
addBookBtn.addEventListener("click", makeModalVisible);
//
//
submitBookBtn.addEventListener("click", function (event) {
  event.preventDefault();
  if ((addBookBtn.classList.contains = "hidden")) {
    modalWindow.classList.add("hidden");
    addBookBtn.classList.remove("hidden");
  }
  //
  //
  else console.log("error");
  //
  //
  function getUserInput() {
    const bookTitle = document.getElementById("titleJs");
    const bookAuthor = document.getElementById("authorJs");
    const bookPages = document.getElementById("pagesJs");
    const isBookRead = document.getElementById("isBookReadJs");

    let library = [];

    const book = {
      bookTitle: bookTitle.value,
      bookAuthor: bookAuthor.value,
      bookPages: bookPages.value,
      isRead: isBookRead.value,
    };
    let read = book.isRead.value;

    console.log(read);
    library.push(book);

    bookWrapperjs.innerHTML = "";

    library.forEach(() => {
      localStorage.setItem("bookTitle", book.bookTitle);
      localStorage.setItem("bookAuthor", book.bookAuthor);
      localStorage.setItem("bookPages", book.bookPages);

      const name = localStorage.getItem("bookTitle");
      const author = localStorage.getItem("bookAuthor");
      const pages = localStorage.getItem("bookPages");

      const html = `
        <div class='book '>
        <h1>Title : ${name}</h1>
        <h2>Author : ${author}</h2>
        <h3>Pages : ${pages}</h3>
        </div>
        `;
      bookWrapperjs.insertAdjacentHTML("afterend", html);
    });
  }
  getUserInput();
});
