var canvas = new fabric.Canvas("myCanvas");
var player = "";
var image = "";
player_x = 10;
player_y = 10;
image_w = 30;
image_h = 30;

function player_update() {
    fabric.Image.fromURL("player.png", function(img) {
        player = img;
        player.scaleToWidth(150);
        player.scaleToHeight(140);
        player.set({ top: player_y, left: player_x });
        canvas.add(player);
    });
}

function new_image(get_img) {
    fabric.Image.fromURL(get_img, function(img) {
        image = img;
        image.scaleToWidth(block_w);
        image.scaleToHeight(block_h);
        image.set({ top: player_y, left: player_x });
        canvas.add(block);
    });
}