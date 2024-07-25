const colors = ["red", "blue", "green", "yellow", "aqua"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click",function () {
    const randomIndex = Math.floor(Math.floor(Math.random() * colors.length));

    document.body.style.backgroundColor  = colors[randomIndex];
    color.textContent = colors[randomIndex];
})