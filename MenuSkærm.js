class MenuSkærm{
  
  constructor(){
  this.knapSpil = new ButtonCircle(width/2, height/3, 100, color(175, 0, 0), color(100, 0, 0));
  this.knapTid = new ButtonCircle(width/2, height/1.5, 100, color(255), color(255));
  this.knapPlusTid = new ButtonCircle(width/1.5, height/1.25, 90, color(245), color(150));
  this.knapMinusTid = new ButtonCircle(width/3, height/1.25, 90, color(245), color(150));
  this.minutter = 2;
  }
  
  run(){
    background(220);
    this.knapSpil.draw();
    this.knapTid.draw();
    this.knapPlusTid.draw();
    this.knapMinusTid.draw();
    fill(200, 100, 100);
    textSize(24);
    text("MENU", width/2, height/8);
    fill(0);
    text("SKAK", width/2, height/3+5);
    text(this.minutter, width/2, height/1.5 + 10);
    
    text('+', width/1.5, height/1.25 + 10);
    text('-', width/3, height/1.25 + 10);
  }
  
  musKlikket(){
    if (this.knapSpil.overCircle()){
      let s = manager.skærme.spil;
      s.sætTid(this.minutter);
      manager.skiftGameState("spil");
    }
    else if (this.knapPlusTid.overCircle()){
      this.minutter++;
    } else if (this.knapMinusTid.overCircle() && this.minutter > 1) {
      this.minutter--
    }
  }
}