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
// create a new image from the spritesheet
var image = new Image();
image.src = spriteSheetLocation;
image.crossOrigin = true;
// once the spritesheet loads,
// draw it on the canvas
var position = spritePositionToImagePosition(1,0)
image.onload = function() {
    context.drawImage(
        image,
        position.x,
        position.y,
        SPRITE_WIDTH,
        SPRITE_HEIGHT,
        0,
        0,
        SPRITE_WIDTH,
        SPRITE_HEIGHT
    );
};
  