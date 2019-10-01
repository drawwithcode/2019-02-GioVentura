var colorList = ['#BECAE6',
                 '#209EBB',
                 '#023047',
                 '#FFB701',
                 '#FC8500']

function setup() {
  createCanvas(windowWidth,windowHeight);
  angleMode(DEGREES);

}

function draw() {
  for (var x = 0; x < windowWidth+10; x += 10) {
  for (var y = 0; y < windowHeight+10; y += 10) {

  fill(random(colorList));
  ellipse(x,y,15);}
  }


}
