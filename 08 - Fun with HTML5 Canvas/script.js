const canvas = document.querySelector('#draw');
const ctx = canvas.getContext('2d');
[canvas.width, canvas.height] = [window.innerWidth, window.innerHeight];
[ctx.strokeStyle, ctx.lineJoin, ctx.lineCap] = ['#BADA55', 'round', 'round'];]
let [isDrawing, lastX, lastY, hue, direction] = [false, 0, 0, 0, true];

function draw (e) {
    if(!isDrawing) return;
    ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
    ctx.beginPath();
    ctx.moveTo(lastX, lastY);
    ctx.lineTo (e.offsetX, e.offsetY);
    ctx.stroke();
    [lastX, lastY] = [e.offsetX, e.offsetY];
    hue++;
    if (hue >= 360) hue = 0;
    if (ctx.lineWidth >= 120 || ctx.lineWidth <= 1){
        direction = !direction;
    }
    direction ? ctx.lineWidth++ : ctx.lineWidth--;
}

canvas.addEventListener('mousemove', draw);
canvas.addEventListener('mousedown', (e) => {
    isDrawing = true;
    [lastX, lastY] = [e.offsetX, e.offsetY];
});
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);