let img;
function setup() {
  createCanvas(512, 512);
  img = loadImage("/vc/docs/sketches/lenna.png", "");
  //   imageMode(CENTER);//dividir en 2 alto y ancho
}

function draw() {
  translate(width, height);
  rotate(PI);
  image(img, 0, 0);
  //   image(img, 0, 0, width, height);
  //   loadPixels();
  //   let tmp = new Uint8ClampedArray(pixels);
  //   for (let i = 0; i < pixels.length; i += 4) {
  //     pixels[i] = tmp[pixels.length - i];
  //     pixels[i + 1] = tmp[pixels.length - i - 3];
  //     pixels[i + 2] = tmp[pixels.length - i - 2];
  //     pixels[i + 3] = tmp[pixels.length - i - 1];
  //   }
  //   updatePixels();
}
