let img;
function setup() {
  createCanvas(512, 512);
  img = loadImage("/vc/docs/sketches/lenna.png");
}

function draw() {
  image(img, 0, 0, width, height);
  loadPixels();
  for (let i = 0; i < pixels.length; i += 4) {
    let prom = (pixels[i] + pixels[i + 1] + pixels[i + 2]) / 3;
    pixels[i] = prom;
    pixels[i + 1] = prom;
    pixels[i + 2] = prom;
  }
  updatePixels();
}
