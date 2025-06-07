
const container = document.querySelector(".container");
const button = document.querySelector("button");


for (i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.className = 'fgrid';
    container.style.gridTemplateColumns = `repeat(${16}, 25px)`;
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'lightblue';
    })
    
    container.appendChild(div);
}


button.addEventListener('click', () => {
    let userSelection = prompt('Enter desired grid size');
    if (userSelection > 100){
        
    }
    container.innerHTML = '';


    container.style.gridTemplateColumns = `repeat(${userSelection}, 25px)`;


    for (i = 0; i < userSelection*userSelection; i++){
        const div = document.createElement('div');
        div.className = 'fgrid';
        div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'lightblue';
    })
    container.appendChild(div);
    }
})


