const SPRITE_WIDTH = 13;
const SPRITE_HEIGHT = 14;
const BORDER_WIDTH = 1;
const SPACING_WIDTH = 1;

// converts a row and column of the spritesheet
// to coordinates in an image
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

console.log(`A sprite at position (3, 1) has pixel coordinates ${spritePositionToImagePosition(3, 1).x}, ${spritePositionToImagePosition(3, 1).y}`);