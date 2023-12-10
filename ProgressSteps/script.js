const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');

const steps = document.querySelectorAll('.step')
const lines = document.querySelectorAll('.line')

const firstStep = 1;
let currentStep = 1;
const finalStep = 4; // Change the final step to 10

function status() {
    if (currentStep === firstStep) {
        btn1.disabled = true;
    } else {
        btn1.disabled = false;
    }

    if (currentStep === finalStep) {
        btn2.disabled = true;
    } else {
        btn2.disabled = false;
    }
}

function update(){
    for(let i = 0 ; i < currentStep ; i++){
        steps[i].classList.add('active')
        if(i < currentStep-1){
            lines[i].classList.add('active')
        }
    }
    
    for(let i = currentStep ; i < steps.length ; i++){
        steps[i].classList.remove('active')
        if(i < lines.length+1){
            lines[i-1].classList.remove('active')
        }
    }
}

btn1.addEventListener('click', () => {
    currentStep--;



    status();
    update();
    console.log("prev", currentStep);
});

btn2.addEventListener('click', () => {
    currentStep++;


    status();
    update();
    console.log("next", currentStep);
});
