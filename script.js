
const container = document.querySelector(".container")

for (i = 0; i < 256; i++){
    let div = document.createElement('div');
    div.className = 'fgrid';
    div.textContent = `a`;
    container.appendChild(div);
}