
const container = document.querySelector(".container");
const button = document.querySelector("button");
const stylesheet = document.styleSheets[0];

function RGB_r(){
    r = Math.round(Math.random() * 255)
    b = Math.round(Math.random() * 255)
    g = Math.round(Math.random() * 255)
    return 'rgba(' + r + ',' + b + ',' + g  + ',' + 1 + ')';
}

function createGrid(size){
    container.innerHTML = '';
    for (i = 0; i < size*size; i++){
    const cellSize = 400 / size;
    const div = document.createElement('div');
    div.className = 'fgrid';
    div.style.width = `${cellSize}px`
    div.style.height = `${cellSize}px`
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = RGB_r();
    })
   
    container.appendChild(div);
}}

createGrid(16)



button.addEventListener('click', () => {
    let userSelection = 101;
    while (userSelection > 100 || userSelection < 1){
        userSelection  = prompt('Select a grid size between 1 and 100: ');
    }
   
    createGrid(userSelection)
   
})


