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
image.onload = function() {
    context.drawImage(
        image,
        0,
        0,
        image.width,
        image.height,
        0,
        0,
        canvas.width,
        canvas.height
    );
};
  