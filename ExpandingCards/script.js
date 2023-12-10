const cards = document.getElementsByClassName('card');


function remove(myCard){
    for(let card of cards){
        card.classList.remove('active');
            
    }
}
for(let card of cards){


card.addEventListener('click', () => {
    
    remove(card);
    card.classList.add('active');
    console.log('hey');
})}