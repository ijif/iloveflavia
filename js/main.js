const SPRITE_WIDTH = 13;
const SPRITE_HEIGHT = 14;
const BORDER_WIDTH = 1;
const SPACING_WIDTH = 1;

function spritePositionToImagePosition(row, col) {
    return {
        x: (
            BORDER_WIDTH +
            col * (SPACING_WIDTH + SPRITE_WIDTH)
        ),
        y: (
            BORDER_WIDTH +
            row * (SPACING_WIDTH + SPRITE_HEIGHT)
        )
    }
}



var canvas = document
            .querySelector('canvas');
var context = canvas
              .getContext('2d');

var spriteSheetLocation = 'js/img/squirrel.png';
var image = new Image();
image.src = spriteSheetLocation;
image.crossOrigin = true;
// once the spritesheet loads,
// draw it on the canvas
var row = 0;
var col = 0;
function animate() {
    // once we hit the end of a row,
    // move to the next
    if (col === 3) {
        col = 0;
        row += 1;
    }
    // once we finish the last row,
    // start again
    if (row === 2) {
        row = 0;
    }


 // make an image position using the 
    // current row and colum
    var position = spritePositionToImagePosition(row, col);
    context.drawImage(
        image,
        position.x,
        position.y,
        SPRITE_WIDTH,
        SPRITE_HEIGHT,
        600,
        600,
        SPRITE_WIDTH,
        SPRITE_HEIGHT
    );
    col += 1;
}

image.onload = function() {
    setInterval(animate, 500);
};
  