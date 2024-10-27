const canvas = document.getElementById('canvas-element')
const ctx = canvas.getContext('2d');
const clearCanvasButton = document.getElementById('clear-canvas')
const colorInput = document.getElementById('choose-color')  

//Task 4- Add color selection and Canvas Clearing
colorInput.addEventListener('input', (event) =>{
    color = event.target.value
} )

clearCanvasButton.addEventListener('click', () => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
})

//Task 2- Configure the JavaScript for Drawing Context
let drawing = false

canvas.addEventListener('mousedown', () => {
    drawing = true
    ctx.beginPath()
});

canvas.addEventListener('mousemove', (event) => {
    if (drawing) {
        ctx.lineTo(event.offsetX, event.offsetY)
        ctx.stroke()
    }
});

canvas.addEventListener('mouseup', () => {
    drawing = false
    ctx.closePath()
});

canvas.addEventListener('mouseout',() => {
    drawing=false
    ctx.closePath();
})



