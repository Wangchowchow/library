const addBtn = document.getElementById('addBtn');
addBtn.addEventListener('click',addBookToLibrary);
let myLibrary = [];
let newBook;

class Book {
    constructor(title,author,readStatus){
        this.title = title.value;
        this.author = author.value;
        this.readStatus = readStatus.value;
    }
}

function addBookToLibrary(){
    if (title.value === '' || author.value === ''){
        alert('Please fill out the required fields.');
        return
    }
    newBook = new Book(title,author,readStatus);
    myLibrary.push(newBook);
    render();
    title.value = '';
    author.value = '';
    readStatus.value = true;
}

function render(){
    const display = document.getElementById('container');
    const books = document.querySelectorAll('.book');
    books.forEach(book=>display.removeChild(book));

    for(let i = 0; i < myLibrary.length; i++){
        createBook(myLibrary[i]);
    }
}

function createBook(item){
    const library = document.getElementById('container');
    const bookDiv = document.createElement('div');
    const titleDiv = document.createElement('div');
    const authorDiv = document.createElement('div');
    const removeBtn = document.createElement('button');
    const readBtn = document.createElement('button');

    bookDiv.classList.add('book');
    
    titleDiv.textContent = item.title;
    titleDiv.classList.add('title');
    bookDiv.appendChild(titleDiv);

    authorDiv.textContent = item.author;
    authorDiv.classList.add('author');
    bookDiv.appendChild(authorDiv);

    readBtn.classList.add('readBtn');
    bookDiv.appendChild(readBtn);
    if(item.readStatus === 'false'){
        readBtn.textContent = 'Not Read';
        readBtn.style.backgroundColor = 'blue';
    }
    else{
        readBtn.textContent = 'Read';
        readBtn.style.backgroundColor = 'green';
    }

    removeBtn.textContent = 'Remove';
    removeBtn.classList.add('removeBtn');
    bookDiv.appendChild(removeBtn);

    library.appendChild(bookDiv);

    removeBtn.addEventListener('click',function(){
        myLibrary.splice(myLibrary.indexOf(item),1);
        render();
    });

    readBtn.addEventListener('click',function(){
        if(item.readStatus === 'false'){
            item.readStatus = 'true'
        }
        else{
            item.readStatus = 'false'
        }
        render();
    });
};

let artOfWar = {
    title : 'The Art of War',
    author : 'Sun Tzu',
    readStatus : 'false',
}
let theAbcMurders = {
    title : 'The ABC Murders',
    author : 'Agatha Christie',
    readStatus : 'true',
}
let harryPotter = {
    title : 'Harry Potter and the Deathly Hallows',
    author : 'J. K. Rowling',
    readStatus : 'true',
}
myLibrary.push(artOfWar,theAbcMurders,harryPotter);
render();