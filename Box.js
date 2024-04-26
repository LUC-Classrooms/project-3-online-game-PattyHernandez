function Box(_x, _y){
  this.x = _x;
  this.y = _y;

  this.xSpeed = 0;
  this.ySpeed = random(6, 6); // 6 + 6 (falling)
  this.rSpeed = random(-.03, .03); // rotation speed

  this.angle = 0;

  /* choose a color scheme at random */
  if(random(100) > 50){ // 50-50 chance
    this.boxColor = color(random(100, 255), 0, 0); // red
    this.ribbonColor = color(0, random(100, 255,), 0); // green
  } else {
    this.boxColor = color(0, random(100, 255,), 0); // green
    this.ribbonColor = color(random(100, 255,), 0, 0); // red
  }

  this.display = function(){

    push();
    translate(this.x, this.y);
    rotate(this.angle);

    rectMode(CENTER);
    fill(this.boxColor);
    ellipse(0, 0, 45); // 40px square

    fill(this.ribbonColor);
    rect(0, 0, 40, 10); // horizontal ribbon
    rect(0, 0, 10, 40); // vertical ribbon

    pop();

  }

  this.move = function() {
    this.y += this.ySpeed; // spin
  }

  this.spin = function() {
    this.angle += this.rSpeed; // spin
  }



}