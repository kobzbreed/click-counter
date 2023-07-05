// let clickCountEl = document.getElementById("clickCount")
// let count = 0
// let clear

// function clicker(){
//     count++
//     clickCountEl.textContent = `Click ${count}`
//     clearTimeout(clear)
//     clear = setTimeout(function(){
//         count = 0
//         clickCountEl.textContent = ""

//     }, 5000)
// }



let clickCountEl = document.getElementById("clickCount");
let countDownEl = document.getElementById("clickCount2");
let count = 0;
let clear;

function clicker() {
    count++;
    clickCountEl.textContent = `Click ${count}`;
    clearTimeout(clear);

    let remainingTime = 5;
    clear = setInterval(function() {
        remainingTime--;
        if (remainingTime > 0) {
            countDownEl.textContent = `Reset in ${remainingTime}s`;
        } else {
            clearInterval(clear);
            count = 0;
            countDownEl.textContent = "";
            clickCountEl.textContent = "";
        }
    }, 1000);
}
