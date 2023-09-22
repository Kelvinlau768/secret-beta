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

        let windowLocation = text + string + ".." + "/" + "product" + "/" + search.value + ".html" + string + ";";
        searchBtn.setAttribute('onclick', windowLocation);
        // location.replace('footer.html');
        searchBtn.click();
    }
})

// function checkFileExist(urlToFile) {
//     var xhr = new XMLHttpRequest();
//     xhr.open('HEAD', urlToFile, false);
//     xhr.send();

//     if (xhr.status == "404") {
//         return false;
//     } else {
//         return true;
//     }
// }

// var result = checkFileExist("http://127.0.0.1:5500/home.html");

// if (result == true) {
//     alert('yay, file exists!');
// } else {
//     alert('file does not exist');
// }