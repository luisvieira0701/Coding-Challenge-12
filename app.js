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
            tools=event.target.value
        })
    })

    canvas.addEventListener('mousemove',(event)=> {
        if (drawing){
            ctx.clearRect(0,0,canvas.width,canvas.height)
            ctx.strokeStyle = color
            ctx.beginPath()

        if (tool === 'rectangle') {
            ctx.rect(startX,startY,event.offsetX,event.offsetY);
            ctx.stroke()
        } else if (tool ==='pencil') {
            ctx.moveTo(startX,startY)
            ctx.lineTo(event.offsetX,event.offsetY)
            ctx.stroke()
            startX=event.offsetX
            startY=event.offsetY
        }
            }
        }
    );

    






