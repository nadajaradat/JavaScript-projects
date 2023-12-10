let box = document.getElementById('choices');
let choices = document.getElementsByClassName('choices')[0];
let allChoices = document.getElementsByClassName('choice')
addEventListener("keydown", (event) => {
    if (event.key === 'Enter') {
        randomSelect()
        box.value = '';
        console.log('enter');
    }
});

const split = (input) => {
    console.log(input);
    const arr = input.split(',').map(choice => choice.trim()).filter(choice => choice !== '');

    console.log(arr);

    choices.innerHTML = '';

    arr.forEach(element => {
        const choice = document.createElement('div');
        choice.classList.add('choice');
        choice.textContent = element;
        choices.appendChild(choice);
    });

    randomSelector(arr);
};

box.addEventListener('input', () => {
    split(box.value);
});

let randomIdx = 0;

const randomSelector = (arr) => {
    randomIdx = Math.floor(Math.random() * arr.length);
    return arr[randomIdx];
};

function randomSelect() {
    const times = 30

    const interval = setInterval(() => {
        const randomTag = randomSelector(allChoices)
        console.log(randomTag)
	if (randomTag !== undefined) {
        randomTag.classList.add('selected')

        setTimeout(() => {
            randomTag.classList.remove('selected')
        }, 100)
	}
    }, 100);

    setTimeout(() => {
        clearInterval(interval)

        setTimeout(() => {
            const randomTag = randomSelector(allChoices)

            randomTag.classList.add('selected')
        }, 100)

    }, times * 100)
}




