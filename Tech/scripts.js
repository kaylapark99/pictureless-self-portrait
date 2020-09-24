var menu = document.querySelectorAll(".platform")
var contacts = document.querySelectorAll(".dropdown")
var images = document.querySelectorAll(".images");
var buttons = document.querySelectorAll(".drop-button");
var contactsList = document.querySelectorAll(".dropdown li");
var notifications = document.getElementById("notifications");

menu.forEach(a => {
    a.addEventListener('mouseover', function() {
        a.style["opacity"] = "1";
    })
})

menu.forEach(a => {
    a.addEventListener('mouseleave', function() {
        a.style["opacity"] = "0.6";
    })
})

buttons.forEach(a => { a.addEventListener('mouseover', mouseoverSpin)})

buttons.forEach(a => { a.addEventListener('mouseleave', mouseleaveSpin)})

contactsList.forEach(a => { a.addEventListener('mouseenter', function(){
        a.style["opacity"] = "1";
    })
})

contactsList.forEach(a => { a.addEventListener('mouseleave', function() {
        a.style["opacity"] = "0.8";
    })
})

contactsList.forEach(a => { a.addEventListener('click', function() {
        if(a.classList.contains("cross-out")) {
            a.classList.remove("cross-out");
            var imgClass = a.classList;
            document.getElementById(imgClass).classList.remove("hide");
        }
        else {
            var imgClass = a.classList;
            document.getElementById(imgClass).classList.add("hide");
            a.classList.add("cross-out");
        }
    })
})

function mouseoverSpin() {
    this.style["transform"] = "rotate(180deg)";
    this.style["transition-duration"] = "1s";
}

function mouseleaveSpin() {
    this.style["transform"] = "rotate(-360deg)";
    this.style["transition-duration"] = "1s";
}

function toggleImage(y) {
    images[y].classList.toggle("hide");
    menu[y].classList.toggle("cross-out");
    if(y==6) {
        notifications.classList.toggle("explain");
    }
    else {
        contacts[y].classList.toggle("cross-out");
    }
}

function toggleMenu(x) {
    contacts[x].classList.toggle("show");
    if(contacts[x].classList.contains("show")){
        buttons[x].innerHTML = "-";
        hoverContacts(x);
    }
    else {
        buttons[x].innerHTML = "+";
    }
}

function hoverContacts(z) {
    var dropContacts = contacts[z].getElementsByTagName("li");
    dropContacts.forEach(a => { a.addEventListener('mouseover', function() {
        a.style["opacity"] = "1";
        })
    })
}

function flashQuote() {
    var i = 0;
    var quotes = ["\"NO MATTER", "WHO YOU ARE", "EVERY DAY", "OF YOUR LIFE", "YOU'RE SITTING", "IN A DATABASE", "JUST READY", "TO BE LOOKED AT\"", "-EDWARD SNOWDEN"]
    var stop = false;
    var loopTyping = function() {
        document.getElementById("flash-quote").innerHTML = quotes[i];
        i++;
        if(i <= quotes.length) {
            setTimeout(loopTyping, 1000);
        }
        else { 
            document.getElementById("flash-quote").classList.add("stop");
            document.getElementById("flash").classList.add("stop");
            return;
        }
    }
    loopTyping();
}

function changeOpacity(className) {
    var elems = document.querySelectorAll(className);
    var index = 0, length = elems.length;
    for ( ; index < length; index++) {
        elems[index].style.transition = "opacity 0.5s linear 0s";
        elems[index].style.opacity = 0.5;
    }
}


function stalk(msg) {
    var stalk = document.getElementById("stalk");
    stalk.innerHTML = msg;
    document.getElementById("stalkBox").classList.remove("stop");
}

function remove() {
    document.getElementById("stalkBox").classList.add("stop");
}




function popUp() {
    var popup = document.getElementById("popup");
    popup.classList.remove("stop");
    var background = document.querySelectorAll(".change-blur")
    var x;
    for(x=0; x < background.length; x++) {
        background[x].classList.add("blur");
    }
    document.getElementById("learn-more").addEventListener('click', function(){
        document.getElementById("popupLearn").classList.remove("stop");
        var learnText =  document.querySelector(".popupLearn h1");
        setTimeout(function(){
            learnText.style["font-size"] = "5rem";
            learnText.innerHTML = "do you see now?";
            setTimeout(function(){
                learnText.innerHTML = "how much you can learn ";
                setTimeout(function(){
                    learnText.innerHTML += "from someone's metadata";
                    setTimeout(function(){
                        learnText.style["font-size"] = "8rem";
                        learnText.innerHTML = "nothing is private anymore";
                        setTimeout(function(){
                            learnText.style["font-size"] = "30rem";
                            learnText.innerHTML = "STOP";
                            learnText.addEventListener('mouseover', function(){
                                learnText.style["cursor"] = "pointer";
                                learnText.innerHTML = "!!!";
                            });
                            learnText.addEventListener('mouseleave', function(){
                                learnText.style["cursor"] = "pointer";
                                learnText.innerHTML = "STOP";
                            });
                            learnText.addEventListener('click', function(){
                                popup.classList.add("stop");
                                for(y=0; y < background.length; y++) {
                                    background[y].classList.remove("blur");
                                }
                                document.getElementById("popupLearn").classList.add("stop");
                                return;
                            });
                        }, 5000);
                    }, 5000);
                },5000);
            }, 5000);
        }, 5000);
        
    
    });

    document.getElementById("close-popup").addEventListener('click', function(){
        popup.classList.add("stop");
        var y;
        for(y=0; y < background.length; y++) {
            background[y].classList.remove("blur");
        }
    });
}

setTimeout(popUp, 70800);