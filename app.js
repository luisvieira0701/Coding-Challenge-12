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

if (document.querySelector('input[value="pencil"]')) {
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
} 


//Task3-  Implement shape drawing logic for lines, rectangles, and circles.
if (document.querySelector('input[value="rectangle"]')) {
    let startX, startY;

    canvas.addEventListener('mousedown', (event) => {
        drawing = true
        startX=event.offsetX;
        startY=event.offsetY;
    })

    canvas.addEventListener('mousemove',(event)=> {
        if (drawing){
            ctx.clearRect(0,0,canvas.width,canvas.height)
            ctx.beginPath();
            ctx.rect(startX,startY,event.offsetX-startX,event.offsetY-startY)
            ctx.stroke()
        }
    });

    canvas.addEventListener('mouseout',() =>{
        drawing=false
        ctx.closePath()
    })
}





