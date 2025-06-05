
const container = document.querySelector(".container");
const button = document.querySelector("button")

for (i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.className = 'fgrid';
    div.addEventListener('click', () => {
        div.style.backgroundColor = 'black';
    })
    container.appendChild(div);
}

button.addEventListener('click', () => {
    let userSelection = prompt('Enter desired grid size');
    container.innerHTML = '';
    for (i = 0; i < userSelection*userSelection; i++){
        const div = document.createElement('div');
        div.className = 'fgrid';
        div.addEventListener('click', () => {
        div.style.backgroundColor = 'black';
    })
    container.appendChild(div);
    }
})


