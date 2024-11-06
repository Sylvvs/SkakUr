class VinderSkærm {
  constructor() {
    this.knapSpil = new ButtonCircle(75, 75, 75, color(175, 0, 0), color(100, 0, 0));
    this.konfettiArr = [];
    for (let i = 0; i < 75; i++) {
      this.konfettiArr.push(new Konfetti())
    }
  }
  
  run() {
    this.tegnSkærm();
    this.knapSpil.draw();
  }
  
  tegnSkærm() {
    background(225)
    let padding = 10;
    fill(5)
    textAlign(CENTER,CENTER)
    text(`A winner is you, ${this.recievedData}!!`,padding,height/2, width-padding*2)
    
    this.konfetti()
  }
  
  konfetti() {
    for (let i = 0; i < this.konfettiArr.length; i++) {
      this.konfettiArr[i].update()
    }
  }
  
  musKlikket() {
    if (this.knapSpil.overCircle()) {
      manager.skiftGameState("menu");
    }
  }
  
}

class Konfetti {
  constructor() {
    push()
    colorMode(HSB)
    this.color = color(random(0,360),100,100)
    pop()
    this.shape = floor(random(1,3))
    this.pos = createVector(random(10,width-10),height/2)
    this.initialRotation = random(-0.1,0.1)
    this.rotation = 0;
    this.size = 5;
    
    this.velocity = createVector(random(-2,2),(random(-2,-7)))
  }
  
  update() {
    this.updatePos()
    this.display()
  }
  
  updatePos() {
    let gravity = createVector(0,0.15)
    
    this.pos.add(this.velocity)
    this.velocity.add(gravity)
    
    this.rotation += this.initialRotation;
  }
  
  display() {
    push()
    colorMode(HSB)
    fill(this.color)
    stroke(this.color)
    translate(this.pos.x,this.pos.y)
    rotate(this.rotation)
    switch (this.shape) {
      case 1:
        circle(0,0,this.size)
        break;
      case 2:
        rectMode(CENTER)
        rect(0,0, this.size, this.size)
    }
    pop()
  }
}