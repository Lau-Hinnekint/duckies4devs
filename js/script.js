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





