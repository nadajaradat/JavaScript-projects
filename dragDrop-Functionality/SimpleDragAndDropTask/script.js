const draggables = document.querySelectorAll('.box')
const containers = document.querySelectorAll('.container')

draggables.forEach(draggable => {
    draggable.addEventListener('dragstart', ()=>{
        console.log("start");
        draggable.classList.add('dragging');
    })

    draggable.addEventListener('dragend', ()=>{
        console.log("end");
        draggable.classList.remove('dragging');
    })
});

containers.forEach(container =>{
    container.addEventListener('dragover', e=>{
        e.preventDefault();



        //we know that one element has class dragging 
        const draggable = document.querySelector('.dragging')

        /*if we only do this the draggable element added as the last child of the 
        current container but we want to put it in any place

        container.appendChild(draggable)*/

        const afterElement = getDragAfterElement(container, e.clientY);

        if (afterElement == null) {
            container.appendChild(draggable)
          } else {
            container.insertBefore(draggable, afterElement)
          }


    })

    // y is the position of current dragging element
    const getDragAfterElement = (container, y)=>{

        //we want all boxs to know the position of the dragging  box
        const draggableElements = [...container.querySelectorAll('.box:not(.dragging)')]
        return draggableElements.reduce((closest, child) => {
            const box = child.getBoundingClientRect()
            const offset = y - box.top - box.height / 2
            if (offset < 0 && offset > closest.offset) {
              return { offset: offset, element: child }
            } else {
              return closest
            }
          }, { offset: Number.NEGATIVE_INFINITY }).element
    }
})