window.addEventListener("keydown", function (event) {

    const audio = document.querySelector("audio[data-key=" + '"' + event.key + '"' + "]");
    const key = document.querySelector(".key[data-key=" + '"' + event.key + '"' + "]");

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing")
});

for (let i = 0; i < querySelectorAll(".key").length; i++) {
    document.querySelectorAll(".key")[i].addEventListener("transitioned", removeTransition);
}


const allKeys = document.querySelectorAll(".key");
allKeys