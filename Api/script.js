// Создайте элементы DOM для отображения информации о случайном пользователе, полученного с помощью Random User API.

const contacts = document.querySelector('#contacts')
 
 
 function createItem(picture,name){
    
        contacts.innerHTML = ''
        
        const userAvatar = document.createElement('img');
        const userName = document.createElement('p');

        userAvatar.src = picture
        userName.innerText = name

        contacts.append(userAvatar,userName);
}

async function fetchApi() {
    const url = `https://randomuser.me/api/`
    try {
        const response = await fetch(url);
        if(!response.ok) {
            throw new Error();
        }
        const data = await response.json()
        const userImg = data.results[0].picture.large;
        const userName = data.results[0].name.first;

        createItem(userImg,userName);

    }catch(e) {
        console.error("Here is problem",e);
    }
}
fetchApi() 

// Создайте элементы DOM для отображения изображений случайных котов, полученных с помощью The Cat API.

const cat = document.querySelector('.cat')

function createElement(img){
    cat.innerHTML = ''

    const catAvatar = document.createElement('img') 

    catAvatar.src = img;

    cat.append(catAvatar)

}

async function catElement() {
    const url = `https://api.thecatapi.com/v1/images/search`
    try{
        const response = await fetch(url);
        if(!response.ok){
           throw new Error();
        }
        const data = await response.json();
    
        const catImg = data[0].url;

        createElement(catImg)
        

    }
    catch(e){
        console.error('Error',e)
    }
}
catElement()


// Создайте элементы DOM для отображения случайных шуток, полученных с Chuck Norris API. ( если вы где то используйте эти шутки - с вами перестанут общаться люди, так что только в рамках задания!!!!!)

const chuck_norris = document.querySelector('.chuck_norris')

function chuckNnorris(value){
    chuck_norris.innerHTML = '';

    const norris = document.createElement('p')
    norris.innerText = value;

    chuck_norris.append(norris);
}

async function chuckNnorrisElem(){
    const url = `https://api.chucknorris.io/jokes/random`

    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error()
        }
        const data = await response.json();
        chuckNnorris(data.value)
        
    }
    catch(e){
        console.error('error',e)
    }
}
chuckNnorrisElem()


// Создайте элементы DOM для отображения названий и авторов случайных книг, полученных с помощью Google Books API.

const books = document.querySelector('.books')

function createBooks(name,authors){
    books.innerHTML = ''

    const nameOfBooks = document.createElement('h6');
    const authorOfBooks = document.createElement('p');

    nameOfBooks.innerText = name
    authorOfBooks.textContent = authors

    

    books.append(nameOfBooks,authorOfBooks)
}

async function booksInfo(){
    const url = `https://www.googleapis.com/books/v1/volumes?q=random`
    try{
        const response = await fetch(url);
        if(!response.ok){
            throw new Error();
        }
        const data = await response.json();
        const randomBook = data.items[0];
        const bookTitle = randomBook.volumeInfo.title;
        const bookAuthors = randomBook.volumeInfo.authors ? randomBook.volumeInfo.authors.join(', ') : 'Нет информации';

        createBooks(bookTitle, bookAuthors);
    }catch(e){
        console.error('error',e)
    }
}
booksInfo()

// Создайте элементы DOM для отображения текста и источника случайных цитат, полученных с Kanye West API.

const west = document.querySelector('.west')

function createWest(data){
    west.innerHTML = ''

    const titleWest = document.createElement('p')
    titleWest.innerText = data

    west.append(titleWest)

}
async function itemWestNew(){
    const url = `https://api.kanye.rest`

    try{
        const response = await fetch(url)
        if(!response.ok){
            throw new Error()
        }
        const data = await response.json();
        console.log(data)

        createWest(data.quote)
    }
    catch(e){
        console.error('error',e)
    }
}

itemWestNew()














   
  

    











