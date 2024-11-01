const canvas = document.getElementById('canvas-element')
const ctx = canvas.getContext('2d');
const clearCanvasButton = document.getElementById('clear-canvas')
const colorInput = document.getElementById('choose-color')  

let drawing = false
let startX,startY
let tool='pencil'
let color='#000000'

//Task 4- Add color selection and Canvas Clearing
colorInput.addEventListener('input', (event) =>{
    color = event.target.value
} )

clearCanvasButton.addEventListener('click', () => {
    ctx.clearRect(0,0,canvas.width,canvas.height);
})

//Task 2- Configure the JavaScript for Drawing Context
    canvas.addEventListener('mousedown', (event) => {
        drawing = true
        startX=event.offsetX
        startY=event.offsetY
        ctx.beginPath()
    });
     
    canvas.addEventListener('mouseup', () => {
        drawing = false
        ctx.closePath()
    });
    
    canvas.addEventListener('mouseout',() => {
        drawing=false
        ctx.closePath();
    })

//Task3-  Implement shape drawing logic for lines, rectangles, and circles.
    const tools = document.querySelectorAll('input[name="tool"]');
    tools.forEach((toolButton)=> {
        toolButton.addEventListener('change', (event) =>{
            tool = event.target.value
        })
    })

    canvas.addEventListener('mousemove',(event)=> {
        if (drawing){
            ctx.strokeStyle = color
            ctx.lineWidth = 2

        if (tool === 'rectangle') {
            ctx.clearRect(0,0,canvas.width,canvas.height)
            ctx.beginPath()
            ctx.rect(startX,startY,event.offsetX - startX,event.offsetY - startY);
            ctx.stroke()
        } else if (tool ==='pencil') {    
            ctx.lineTo(event.offsetX,event.offsetY)
            ctx.stroke()
            ctx.moveTo(event.offsetX,event.offsetY)
        }
            }
        }
    );

    






