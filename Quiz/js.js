const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const explanation = document.getElementById("explanation");
const nextQuestion = document.getElementById("nextQuestion");
const score = document.getElementById("score");
const question = document.querySelector(".question");

function correct(option) {
    option.style.backgroundColor = '#90ee90';
}

function inCorrect(option) {
    option.style.backgroundColor = '#ffb6c1';
}

function disable(args) {
    for (let item of args) {
        item.disabled = true;
    }
}

function enable(args) {
    for (let item of args) {
        item.disabled = false;
    }
}

function hide(element) {
    element.classList.add("hidden");
}

function show(element) {
    element.classList.remove("hidden");
}

function addScore() {
    score.textContent = `Score: ${correctAnswers} / ${all}`;
}
function originStatus(){
    hide(explanation);
    disable([nextQuestion]);
    enable([option1, option2]);
    option1.style.backgroundColor = "white";
    option2.style.backgroundColor = "white";
}


const facts = [
    {
        "statement": "JavaScript was invented in 1995",
        "answer": "true",
        "explanation": "Brendan Eich created JS at Netscape in 1995. The initial version of the language was written in just 10 days."
    },
    {
        "statement": "Strings in JS are editable values",
        "answer": "false",
        "explanation": "In JavaScript strings are immutable values, meaning they cannot be edited; however, they can replaced with new, different strings."
    },
    {
        "statement": "1 + 1 === 2",
        "answer": "true",
        "explanation": "The plus operator gives the sum of two numbers."
    },
    {
        "statement": "'1' + '1' === '2'",
        "answer": "false",
        "explanation": "The plus operator concatenates (joins together) strings, so '1' + '1' === '11'."
    },
    {
        "statement": "typeof ['J', 'S'] === 'array'",
        "answer": "false",
        "explanation": "Arrays have the type 'object'. In JS, everything is either a primitive data type (e.g. 'string', 'number') or an object. Arrays are a kind of object with some special properties.  "
    }
];

let correctAnswers = 0;
let all = 0;

let fact;
function displayStatements() {
    if (facts.length === 0) {
        nextQuestion.textContent = "No More Questions!";
        disable([nextQuestion]);
    } else {
         fact = facts.shift();
        question.textContent = fact.statement;
        explanation.textContent = fact.explanation;

        originStatus();
        
    }
}

option1.addEventListener("click", () => {
    all += 1; // Increment 'all' once per question

    if (fact.answer === "true") {
        correct(option1);
        correctAnswers += 1;
        console.log("true ", correctAnswers);
    } else {
        inCorrect(option1);
        
    }
    disable([option1, option2]);
    enable([nextQuestion]);
    show(explanation);
    addScore();
});

option2.addEventListener("click", () => {
    all += 1; // Increment 'all' once per question

    if (fact.answer === "false") {
        correct(option2);
        correctAnswers += 1;
        console.log("false ", correctAnswers);
    } else {
        inCorrect(option2);
    }
    disable([option1, option2]);
    enable([nextQuestion]);
    show(explanation);
    addScore();
});

nextQuestion.addEventListener("click", () => {
    displayStatements();
});

displayStatements();






