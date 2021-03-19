
var overlay, title, mainContent, footer

var main = function(){
    console.log("main")
}

var showOverlay = function(word){
    overlay.style.display = "block";
    mainContent.style.filter = "blur(5px)";
    footer.style.filter = "blur(5px)";
}

document.addEventListener("DOMContentLoaded", function(){
    mainContent = document.getElementById("chapter");
    footer = document.getElementById("footer");
    overlay = document.getElementById("overlay");

    overlay.addEventListener("click",function(e){
        overlay.style.display = "none";
        mainContent.style.filter = "none";
        footer.style.filter = "none";
    })

    main();
});

