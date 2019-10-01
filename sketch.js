var colorList = ['#BECAE6',
  '#209EBB',
  '#023047',
  '#FFB701',
  '#FC8500'
]

function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);

}

function draw() {
  for (var x = 0; x < windowWidth + 20; x += 20) {
    for (var y = 0; y < windowHeight + 20; y += 20) {
      fill(255);

      ellipse(x, y, 30);
      fill(random(colorList));
      ellipse(x, y, 20);
    }
  }


}
