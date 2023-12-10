let boxs = document.querySelectorAll('.box');

addEventListener("keydown", (event) => {
    boxs[0].textContent = event.key;
    boxs[1].textContent = event.keyCode;
    boxs[2].textContent = event.code;
});
