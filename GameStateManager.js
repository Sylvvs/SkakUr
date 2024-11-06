class GameStateManager {

  constructor() {
    this.skærme = {}; 
    this.aktuelleSkærm = null;
  }

  opretGameState(navn, state) {
    this.skærme[navn] = state; 
  }
  
  skiftGameState(skærmNavn, data){
    this.aktuelleSkærm = this.skærme[skærmNavn];
    this.aktuelleSkærm.recievedData = data;
  }
  runState(){
    this.aktuelleSkærm.run();
  }
}