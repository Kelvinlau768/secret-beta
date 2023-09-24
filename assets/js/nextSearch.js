// const search = document.getElementById('search');
// const searchBtn = document.getElementById('searchBtn');
// // const demo = document.getElementById('demo');

// // search.addEventListener('input', function(){
// //     demo.innerHTML = search.value;
// // });

// let text = "window.location.href=";
// let string = "'";

// // searchBtn.setAttribute('onclick', "window.location.href='https://shopee.co.id/product/443595814/18691796078/';");

// search.addEventListener('keyup', (e) => {
//     if(e.keyCode === 13) {

//         let windowLocation = text + string + "product" + "/" + search.value + ".html" + string + ";";
//         searchBtn.setAttribute('onclick', windowLocation);
//         // location.replace('footer.html');
//         searchBtn.click();
//     }
// });



const search = document.getElementById('search');
const searchBtn = document.getElementById('searchBtn');
// const demo = document.getElementById('demo');

// search.addEventListener('input', function(){
//     demo.innerHTML = search.value;
// });

let text = "window.location.href=";
let string = "'";

// // searchBtn.setAttribute('onclick', "window.location.href='https://shopee.co.id/product/443595814/18691796078/';");

search.addEventListener('keyup', (e) => {
    if(e.keyCode === 13) {

        let windowLocation = text + string + ".." + "/" + search.value.toLowerCase() + ".html" + string + ";";
        searchBtn.setAttribute('onclick', windowLocation);
        // location.replace('footer.html');


        function checkFileExist(urlToFile) {
            var xhr = new XMLHttpRequest();
            xhr.open('HEAD', urlToFile, false);
            xhr.send();
        
            if (xhr.status == "404") {
                return false;
            } else {
                return true;
            }
        }
    
        var results = "http://127.0.0.1:5500/product/" + search.value.toLowerCase() + ".html";

        var result = checkFileExist(results);
        
        if (result == true) {
            searchBtn.setAttribute('onclick', windowLocation);
        } else {
           searchBtn.setAttribute('onclick', window.location.href="../null.html");
        }

        searchBtn.click();
    }
})
