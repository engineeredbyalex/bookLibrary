const addBookBtn = document.getElementById('addBookBtnJs')
const modalWindow = document.getElementById('modalWindowJs')
const submitBookBtn = document.getElementById('submitBookBtnJs')
const bookWrapperjs = document.getElementById('bookWrapperJs')

let library = []

//
//
function makeModalVisible(event) {
  event.preventDefault()
  if ((modalWindow.classList.contains = 'hidden')) {
    modalWindow.classList.remove('hidden')
    addBookBtn.classList.add('hidden')
  } else console.log('error')
}
addBookBtn.addEventListener('click', makeModalVisible)
//
//
submitBookBtn.addEventListener('click', function (event) {
  event.preventDefault()
  if ((addBookBtn.classList.contains = 'hidden')) {
    modalWindow.classList.add('hidden')
    addBookBtn.classList.remove('hidden')
  }
  //
  //
  else console.log('error')
  //
  //
  function getUserInput() {
    const bookTitle = document.getElementById('titleJs')
    const bookAuthor = document.getElementById('authorJs')
    const bookPages = document.getElementById('pagesJs')

    let library = []

    const book = {
      bookTitle: bookTitle.value,
      bookAuthor: bookAuthor.value,
      bookPages: bookPages.value,
    }
    library.push(book)

    bookWrapperjs.innerHTML = ''

    JSON.stringify(library)

    library.forEach((element) => {
      const html = `
        <div class='book '>
        <h1>Title : ${book.bookTitle}</h1>
        <h2>Author : ${book.bookTitle}</h2>
        <h3>Pages : ${book.bookPages}</h3>
        </div>
        `

      bookWrapperjs.insertAdjacentHTML('afterend', html)
    })
  }
  localStorage.setItem('library', JSON.stringify(library))
  getUserInput()
})
