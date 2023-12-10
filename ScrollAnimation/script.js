
//getBoundingClientRect

const boxes = document.querySelectorAll('.content')

window.addEventListener('scroll', checkBoxes)

checkBoxes()//when scrollY is 0

function checkBoxes() {
    const triggerBottom = window.innerHeight / 5 * 4

    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top

        if(boxTop < triggerBottom) {
            box.classList.add('show')
        } else {
            box.classList.remove('show')
        }
    })
}