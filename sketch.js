let manager = new GameStateManager();
let c;

function setup() {
  document.body.style.overflow = "hidden";
  c = createCanvas(415, 800);
  textAlign(CENTER, BASELINE);
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  c.position(x, y);
  manager.opretGameState("menu", new MenuSkærm());
  manager.opretGameState("spil", new SpilSkærm());
  manager.opretGameState("vinder", new VinderSkærm());
  manager.skiftGameState("menu");
}
function draw() {
  manager.runState();
}
function mouseClicked() {
  manager.aktuelleSkærm.musKlikket();
}

function keyReleased() {
  if (key === " ") {
    let fs = fullscreen();
    fullscreen(!fs);
  }
}

function windowResized() {
  let x = (windowWidth - width) / 2;
  let y = (windowHeight - height) / 2;
  c.position(x, y);
  manager = new GameStateManager();
  manager.opretGameState("menu", new MenuSkærm());
  manager.opretGameState("spil", new SpilSkærm());
  manager.opretGameState("vinder", new VinderSkærm());
  manager.skiftGameState("menu");
}
