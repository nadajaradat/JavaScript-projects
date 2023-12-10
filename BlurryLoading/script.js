const bg = document.querySelector('.bg');
const content = document.querySelector('.content');
let count = 1;

const intervalId = setInterval(() => {
    if (count > 100) {
        clearInterval(intervalId); // Clear the interval when count exceeds 100
        bg.style.filter = 'blur(0)';

        content.classList.add('hidden');
    } else {
        const blurAmount = 1 - count / 100; // Calculate the blur amount
        console.log(blurAmount);
        content.textContent = `%${count}`;
        count++;
        bg.style.filter = `blur(${blurAmount}rem)`; // Apply the blur effect to the background
        content.style.opacity = `${blurAmount+.3}`;
    }
}, 100);
