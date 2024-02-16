var typed = new Typed(".auto-type", {
    strings: ["Designer Graphic", "Frontend Developer", "Illustrator"],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
})


let icon = document.getElementById("icon");

icon.onclick = function(){
    document.body.classList.toggle("dark-theme");
    if(document.body.classList.contains("dark-theme")){
        icon.src = "images/sun.png";
    } else {
        icon.src = "images/moon.png";
    }
}