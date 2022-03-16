document.addEventListener("keydown", playSound);

document.addEventListener("keyup", removeTransition);

function playSound(event) {
    const audio = document.querySelector("audio[data-key=" + '"' + event.key + '"' + "]");
    const key = document.querySelector(".key[data-key=" + '"' + event.key + '"' + "]");

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();

    key.classList.add("playing");
    //     // setTimeout(function () {
    //     //     key.classList.remove("playing");
    //     // }, 100);
}

function removeTransition(event) {
    const up = document.querySelector(".key[data-key=" + '"' + event.key + '"' + "]");
    console.log(up);

    up.classList.remove("playing");
}






// for (let i = 0; i < document.querySelectorAll(".key").length; i++) {
//     document.querySelectorAll(".key")[i].addEventListener("transitioned", removeTransition);
// }

// function removeTransition() {
//     key.classList.remove("playing");
// }


// const allKeys = document.querySelectorAll(".key");
// allKeys