class ButtonCircle {
  constructor(posX,posY,diameter,f,h) {
    this.posX = posX;
    this.posY = posY;
    this.diameter = diameter;
    this.farve = f;
    this.hover = h;
    noStroke();
  }

  draw() {
    if (this.overCircle())
      fill(this.hover);
    else
      fill(this.farve);
    ellipse(this.posX, this.posY, this.diameter, this.diameter);
  }
  overCircle() {
    let disX = this.posX - mouseX;
    let disY = this.posY - mouseY;
    if (sqrt(disX*disX + disY*disY) < this.diameter/2) {
      return true;
      console.log('hit!');
    } else {
      return false;
    }
  }
}