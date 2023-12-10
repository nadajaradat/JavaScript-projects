const btn = document.getElementsByClassName('btn')[0];
const searchInput = document.getElementsByClassName('searchInput')[0];

btn.addEventListener('click', () => {
    if(searchInput.classList.contains('hidden'))searchInput.classList.remove('hidden');
    else searchInput.classList.add('hidden');
})