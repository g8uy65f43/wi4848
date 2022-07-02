var ichi = document.getElementById("ichi");
var ohayo = document.getElementById("ohayo");
var ichinokaisu = 0;
ichi.addEventListener("click", itai = () => {
    ichinokaisu++;
    if (ichinokaisu < 3) {
        alert("啊")
        yazyusenpai.play();
    } else if (ichinokaisu > 3 && ichinokaisu < 7) {
        alert("啊!!");
        ichi.style.color = "pink"
    } else if (ichinokaisu > 7 && ichinokaisu < 10) {
        ichi.style.color = "red"
    } else if (ichinokaisu >= 10) {
        alert("再摸你他媽就等著收傳票");
        ichi.style.fontSize = "100px";
    }
})

ohayo.style.height = "400px";
ohayo.addEventListener("mousemove", function() {
    ohayo.src = 'images/3.jpg'
    ohayo.addEventListener("mouseout", function() {
        ohayo.src = "images/1.jpg"
    })
})
var botan1 = document.getElementById("botan1");
botan1.style.background = "purple"
botan1.style.height = "50px"
botan1.style.width = "150px"
botan1.style.alignContent = "center"
botan1.addEventListener("mousedown", function() {
    botan1.style.background = '#5e2e2e';
    botan1.addEventListener("mouseup", function() {
        botan1.style.background = 'purple'
    })
})
var n = 0
botan1.addEventListener("click", function() {
    n++
    if (n % 3 === 0) {
        alert("您已經按了" + n + "次");
    } else if (n === 10) {
        alert("再按老子把你手打斷");
    };
})
const yazyusenpai = new Audio("music/yazyusenpai.mp3")