let NavBar = document.querySelector('.navbar');
let SearCh = document.querySelector('.search-form');
let Items = document.querySelector('.items');

document.querySelector('#bars-btn').onclick = () =>{
    NavBar.classList.toggle('actie');
    SearCh.classList.remove('actie');
    Items.classList.remove('actie');
}



document.querySelector('#search-btn').onclick = () =>{
    SearCh.classList.toggle('actie');
    Items.classList.remove('actie');
    NavBar.classList.remove('actie');
}


document.querySelector('#cart-btn').onclick = () =>{
    Items.classList.toggle('actie');
    SearCh.classList.remove('actie');
    NavBar.classList.remove('actie');
}