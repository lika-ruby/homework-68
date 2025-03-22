let i = 5;
console.log(`До запуску рокети до космоса залишилось`);


const makesCount = setInterval(() => {
    if (i < 1) {
        console.log(`Пуск!!!`);
        clearInterval(makesCount);
    } else {
        console.log(i);
        i -= 1;
    }
}, 1000);



const box1 = document.querySelector("#box1");
const box2 = document.querySelector("#box2");
const box3 = document.querySelector("#box3");

const width = 200;
let r = 0;


setInterval(() => {
    if (r < 100) {
        r += 1;
        box1.style.width = `${width + 1 * r}px`;
    } else {
        r = 0;
    }
}, 100);


const margin = 0;
let u = 0;

setInterval(() => {
    if (u < 100) {
        u += 1;
        box2.style.marginLeft = `${margin + 5 * r}px`;
    } else {
        u = 0;
    }
}, 100);

let k = 0;

setInterval(() => {
    k += 1;
    box3.style.transform = `rotate(${6 * k}deg)`;;
}, 100);


const clicksText = document.querySelector("#clicks")
const touchesText = document.querySelector("#touch")
const field = document.querySelector("#field")
const circle = document.querySelector("#circle")

const min = 0;
const maxW = 920;
const maxH = 320
let c = 0
let t = 0

setInterval(() => {
    circle.style.top = `${Math.round(Math.random() * (maxH - min) + min)}px`
    circle.style.left = `${Math.round(Math.random() * (maxW - min) + min)}px`
}, 1000);

window.addEventListener("click", () => {
    c += 1
    clicksText.textContent = `${c}`
})

circle.addEventListener("click", () => {
    t += 1
    touchesText.textContent = `${t}`
})

const inputEl = document.querySelector("#input")
const timeEl = document.querySelector("#time")

let time = 0;
let isWorking = false
let timer = null




inputEl.addEventListener("blur", () => {
    if (timer) {
        clearInterval(timer);
    }
    isWorking = true
    time = Number(inputEl.value);
    timeEl.textContent = time.toFixed(2);
    inputEl.value = ""


    timer = setInterval(() => {
        if (isWorking) {
            if (time <= 0) {
                clearInterval(timer);
                timeEl.textContent = "Час закінчився";
                isWorking = false
            } else {
                time -= 0.01
                timeEl.textContent = time.toFixed(2);
            }
        }

    }, 10)
})

