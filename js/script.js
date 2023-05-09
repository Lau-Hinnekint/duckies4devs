// GALERY IMAGE CHANGE WHILE HOVERING (DESKTOP VERSION)

const imgThumbs = document.querySelectorAll('#thumbs-img li img');
const imgMain = document.getElementById('gallery-picture');

imgThumbs.forEach(function (img) {
    img.addEventListener('mouseover', function () {   
        const imgSrc = img.src ;
        const imgSrcL = imgSrc.replace('-s','-l');
        imgMain.src = imgSrcL;        
    });
});

// GALERY CAROUSSEL WHEN CLICK ON BUTTON

const btnNext = document.querySelector('.pictures-next');
const btnPrev = document.querySelector('.pictures-prev');
const ulThumbs = document.querySelector('#thumbs-img')

btnPrev.addEventListener('click', function (e) {
    const imgThumb = ulThumbs.appendChild(ulThumbs.firstElementChild).children;
    console.log(imgThumb)
    const imgSrc = imgThumb[0].src;
    const imgSrcL = imgSrc.replace('-s', '-l');
    imgMain.src = imgSrcL;
});
// NEED TO FIND HOW TO REVERSE THE LIST WHEN WE CLICK ON PREVIOUS 
btnNext.addEventListener('click', function (e) {
    const imgThumb = ulThumbs.appendChild(ulThumbs.firstElementChild).children;
    const imgSrc = imgThumb[0].src;
    const imgSrcL = imgSrc.replace('-s', '-l');
    imgMain.src = imgSrcL;
});


// CLICK EVENT ON CTA BUTTON AND UPDATE CART 

const cartNb = document.querySelector('.cart-nb');
const addQty = document.querySelector('.add-qty');
const addCTA = document.querySelector('.add-cta');

addCTA.addEventListener('click', function () {         // CHANGE THE AMOUNT ON CART
    cartNb.textContent = addQty.value;
    if (cartNb.textContent > 99) {
        cartNb.textContent = '99+'
    }
    addCTA.textContent = "Déjà dans le panier";
    addCTA.style.backgroundColor = "rgb(60,179,113)"; // TURN GREEN WHEN CLICK
    addCTA.disabled = true ;                          // SE DESACTIVE APRES UN CLIQUE
});


const arrowAdvan = document.getElementById('advan');
const arrowCar = document.getElementById('carac');
const contentAdvan= document. querySelector('.product-advantages');
const contentCar = document. querySelector('.product-car');
console.log (contentCar)


// ADVANTAGE HIDE ON CLICK AND ARROW SWITCH

arrowAdvan.addEventListener('click', function () {
    contentAdvan.classList.toggle('hidden');
    arrowAdvan.classList.toggle('closed')
}) 

arrowCar.addEventListener('click', function () {
    contentCar.classList.toggle('hidden');
    arrowCar.classList.toggle('closed')
}) 

