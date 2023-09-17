let li = document.querySelectorAll(".faq-text li");

for (var i = 0; i < li.length; i++) {
    li[i].addEventListener("click", (e)=>{
        let clickedLi;
        if(e.target.classList.contains("question-arrow")){
            clickedLi = e.target.parentElement;
        }else{
            clickedLi = e.target.parentElement.parentElement;
        }
            clickedLi.classList.toggle("showAnswer");
    });
}

$(document).ready(function() {
    $('.autoWidth').lightSlider({
        autoWidth:true,
        onSliderLoad: function() {
            $('.autoWidth').removeClass('cS-hidden');
        } 
    });  
});


const image = document.getElementsByClassName('image');
const selectedImage = document.getElementById('selectedImage');

if (image.length == 8) {
    image[0].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[0].getAttribute('src'));
    });
    image[1].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[1].getAttribute('src'));
    });
    image[2].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[2].getAttribute('src'));
    });
    image[3].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[3].getAttribute('src'));
    });
    image[4].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[4].getAttribute('src'));
    });
    image[5].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[5].getAttribute('src'));
    });
    image[6].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[6].getAttribute('src'));
    });
    image[7].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[7].getAttribute('src'));
    });
} else if (image.length == 7) {
    image[0].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[0].getAttribute('src'));
    });
    image[1].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[1].getAttribute('src'));
    });
    image[2].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[2].getAttribute('src'));
    });
    image[3].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[3].getAttribute('src'));
    });
    image[4].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[4].getAttribute('src'));
    });
    image[5].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[5].getAttribute('src'));
    });
    image[6].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[6].getAttribute('src'));
    });
} else if (image.length == 6) {
    image[0].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[0].getAttribute('src'));
    });
    image[1].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[1].getAttribute('src'));
    });
    image[2].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[2].getAttribute('src'));
    });
    image[3].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[3].getAttribute('src'));
    });
    image[4].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[4].getAttribute('src'));
    });
    image[5].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[5].getAttribute('src'));
    });
} else if (image.length == 5) {
    image[0].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[0].getAttribute('src'));
    });
    image[1].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[1].getAttribute('src'));
    });
    image[2].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[2].getAttribute('src'));
    });
    image[3].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[3].getAttribute('src'));
    });
    image[4].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[4].getAttribute('src'));
    });
} else if (image.length == 4) {
    image[0].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[0].getAttribute('src'));
    });
    image[1].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[1].getAttribute('src'));
    });
    image[2].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[2].getAttribute('src'));
    });
    image[3].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[3].getAttribute('src'));
    });
} else if (image.length == 3) {
    image[0].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[0].getAttribute('src'));
    });
    image[1].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[1].getAttribute('src'));
    });
    image[2].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[1].getAttribute('src'));
    });
} else if (image.length == 2) {
    image[0].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[0].getAttribute('src'));
    });
    image[1].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[1].getAttribute('src'));
    });
} else {
    image[0].addEventListener('click', function(){
        selectedImage.setAttribute('src', image[0].getAttribute('src'));
    });
}

const imageGroup = document.getElementById('imageGroup');

imageGroup.style.maxHeight = window.getComputedStyle(selectedImage).height;