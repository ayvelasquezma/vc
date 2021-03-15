let img;

function setup() {
  // Create a canvas that's at least the size of the image.
  createCanvas(512, 512);
  img = loadImage("/vc/docs/sketches/lenna.png", "");
}
function draw() {
  image(img, 0, 0, width, height);
}
