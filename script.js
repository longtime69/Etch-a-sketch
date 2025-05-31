
const container = document.querySelector(".container");


for (i = 0; i < 256; i++){
    const div = document.createElement('div');
    div.className = 'fgrid';
    div.addEventListener('mouseover', () => {
        div.style.backgroundColor = 'black';
    })
    container.appendChild(div);
}


