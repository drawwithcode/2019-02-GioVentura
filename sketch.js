var colorList = ['#FFE2A0',
                 '#C9FFA0',
                 '#A0ECFF',
                 '#A0C0FF',
                 '#FFA0A0'
]

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  frameRate(7);

}

function draw() {
  for (var x = 0; x < windowWidth + 28; x += 28) {
    for (var y = 0; y < windowHeight + 28; y += 28) {
      noStroke();

      fill(random(colorList));
      ellipse(x, y, 45);
      fill(50);
      ellipse(x, y, 30);
      fill(random(colorList));
      ellipse(x, y, 25);
    }
  }


}
