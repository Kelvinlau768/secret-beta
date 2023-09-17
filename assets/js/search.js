const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
// const demo = document.getElementById('demo');

// search.addEventListener('input', function(){
//     demo.innerHTML = search.value;
// });

let text = "window.location.href=";
let string = "'";

// searchBtn.setAttribute('onclick', "window.location.href='https://shopee.co.id/product/443595814/18691796078/';");

search.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {

        let windowLocation = text + string + search.value + ".html" + string + ";";
        searchBtn.setAttribute('onclick', windowLocation);
        // location.replace('footer.html');
        searchBtn.click();
    }
})