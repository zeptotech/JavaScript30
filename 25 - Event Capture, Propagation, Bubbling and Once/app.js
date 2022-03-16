const divs = document.querySelectorAll("div");

function logText(event) {
    console.log(this.classList.value);
    // event.stopPropagation(); stops the bubbling
}

divs.forEach(div => div.addEventListener("click", logText), {
    // capture: true
    once: true
});

// capture: run function on the way down as compared to up (so when you click on 3, it only shows 3. 2, would show 1 and 2). normally it is "false" so when you click 3 it would show 2 and 1
// bubble up: if you click on innermost one it shows other enclosing divs as well (you click on 3- innermost, it will show 2 and 1 because they wrap around 3)

// once:true listen for click then unbind itself once clocked (remove listener)