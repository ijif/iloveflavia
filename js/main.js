var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');

// fiil the canvas
ctx.fillStyle='red';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// set the text
ctx.font = 'italic 18px Arial';
ctx.textAlign = 'center';
ctx. textBaseline = 'middle';
ctx.fillStyle = 'white';  // a color name or by using rgb/rgba/hex values
ctx.fillText('Hello World!', 150, 50); // text and position