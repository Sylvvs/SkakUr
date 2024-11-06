class SpilSkærm {

  constructor() {
    this.knapSpil = new ButtonCircle(75, 75, 75, color(175, 0, 0), color(100, 0, 0));
    this.knapRyk = new ButtonCircle(width/2, height/2, 250, color(255,255,255,230), color(175,175,175,230));
    this.tid1 = 0;
    this.tid2 = 0;
    this.spiller1True = true;
    this.savedTime = millis();
  }

  run() {
    let passedTime = millis() - this.savedTime;
    if (passedTime >= 1000) {
      if (this.spiller1True === true)
        this.tid1 -= 1;
      else
        this.tid2 -= 1;
      this.savedTime = millis();
    }
    
    if (this.tid1 < 0) {
      manager.skiftGameState("vinder",'Black');
    } else if (this.tid2 < 0) {
      manager.skiftGameState("vinder",'White');
    } else {
      
      this.tegnSkærm();
      this.knapSpil.draw();
      stroke(0); strokeWeight(3);
      this.knapRyk.draw();
      fill(200,0,0);
      noStroke();
      this.tegnTal() 
      
    }
    
  }
  
  tegnSkærm() {
    push()
    
    fill(255)
    rect(0,0,width,height/2)
    
    fill(0)
    rect(0,height/2,width,height)
    
    pop()
  }  
  
  tegnTal() {
    textSize(50)
    push()
    translate(width/2, height/4)
    rotate(PI)
    fill(0)
    if (!this.spiller1True) fill(145)
    text(this.omskrivTid(this.tid1), 0, 0);
    
    pop()
    push()
    fill(255)
    if (this.spiller1True) fill(75)
    text(this.omskrivTid(this.tid2), width/2, height/1.3);
    pop()
  }
  
  sætTid(minutter){
    this.tid1 = minutter //* 60;
    this.tid2 = this.tid1;
  
  }

  musKlikket() {
    if (this.knapSpil.overCircle()) {
      manager.skiftGameState("menu");
    }
    if (this.knapRyk.overCircle()) {
      this.spiller1True = !this.spiller1True;
    }
  }
  
  omskrivTid(tid) {
    let hours = 0;
    let minutes = 0;

    while (tid >= 3600) {
        tid -= 3600;
        hours++;
    }

    while (tid >= 60) {
        tid -= 60;
        minutes++;
    }

    let timeString = '';
    if (hours > 0) timeString += hours + ':';
    if (minutes > 0 || hours > 0) timeString += minutes.toString().padStart(2, '0') + ':';
    timeString += tid.toString().padStart(2, '0');

    return timeString;
  }

  
}