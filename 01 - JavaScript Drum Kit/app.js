window.addEventListener("keydown", function (event) {

    const audio = document.querySelector("audio[data-key=" + '"' + event.key + '"' + "]");
    const key = document.querySelector("key[data-key=" + '"' + event.key + '"' + "]");

    if (!audio) return;
    audio.currentTime = 0;
    audio.play();
});

