const fill = document.querySelector('.fill')
const containers = document.querySelectorAll('.container')

    fill.addEventListener('dragstart', ()=>{
        fill.classList.add('dragging');
        setTimeout(() => fill.className = 'invisible', 0)
    })

    fill.addEventListener('dragend', ()=>{
        console.log("end");
        fill.classList.remove('dragging');
    })

containers.forEach(container =>{
    container.addEventListener('dragenter', e=>{
        e.preventDefault();


        container.classList.add('touch')
        //we know that one element has class dragging 
        const draggable = document.querySelector('.dragging')


    })
    container.addEventListener('dragleave', e=>{
        e.preventDefault();

        container.classList.remove('touch')
        //we know that one element has class dragging 
        const draggable = document.querySelector('.dragging')


    })

    container.addEventListener('drop', e=>{
        e.preventDefault();
        container.className = 'container'
        fill.className = 'fill';

        container.append(fill)


    })

    container.addEventListener('dragover', e=>{
        e.preventDefault();

    })
})
