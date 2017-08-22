window.onload = function () {
    var music_play = document.getElementById("music");
    var audio = document.getElementsByTagName("audio")[0];
    audio.addEventListener("ended", function (event) {
        music_play.setAttribute("class", "");
    }, false);
    music_play.addEventListener("touchstart", function (event) {
        if (audio.paused) {
            audio.play();
            // music_play.setAttribute("class", "play");
            // this.style.animationPlayState = "running";
            this.style.webkitAnimationPlayState = "running";
        } else {
            audio.pause();
            // music_play.setAttribute("class", "");
            // this.style.animationPlayState = "paused";
            this.style.webkitAnimationPlayState = "paused";
        }
    }, false);
    var page1 = document.getElementById("page1");
    var page2 = document.getElementById("page2");
    var page3 = document.getElementById("page3");

    page1.addEventListener("touchstart", function (event) {
        page1.style.display = "none";
        page2.style.display = "block";
        page3.style.display = "block";
        page3.style.top = "100%";

        setTimeout(function () {
            page2.setAttribute("class", "page fadeOut")
            page3.setAttribute("class", "page fadeIn")
        }, 5500)
    }, false)
};