var articles = document.querySelectorAll(".article");
var zindex = 16;

function displayArticles() {
    var i = 0;
    var stop = false;
    var popupAds = function() {
        articles[i].classList.remove("hide");
        articles[i].classList.add("show");
        i++;
        if(i<articles.length) {
            setTimeout(popupAds, 5000);
        }
        else {
            return;
        }
    }
    popupAds();
}

setTimeout(displayArticles, 7000);

articles.forEach(a => a.addEventListener('click', function(){
    a.style["z-index"] = zindex++;
}))

articles.forEach(a => a.addEventListener('mouseover', function(){
    a.style["border"] = "3px solid red";
    a.style.transition = "0.3s";
}))

articles.forEach(a => a.addEventListener('mouseleave', function(){
    a.style["border"] = "none";
    a.style.transition = "0.3s";
}))
