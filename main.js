class Player {
    constructor(name, hitsPerMinute) {
      this.name = name;
      this.hitsPerMinute = hitsPerMinute;
      this.balloonCount = 100;
    }
  
    status() {
      console.log(`Player: ${this.name} -- Balllons Left: ${this.balloonCount}`)
    }
}




  // Write function below

  function balloonAttack(p1, p2) {
    
    for(let i = 10; i > 0; i--){

        p1.balloonCount = p1.balloonCount - p2.hitsPerMinute;
        p2.balloonCount = p2.balloonCount - p1.hitsPerMinute;
        p1.status();
        p2.status();


        if (p1.balloonCount > p2.balloonCount){
            console.log(`${p1.name} wins`);
        } else if (p1.balloonCount < p2.balloonCount){
            console.log(`${p2.name} wins`);
        } else {
            console.log('its a tie!');
        }

    }
          }
  
const player1 = new Player('Ash', 5);
const player2 = new Player('john', 2);

balloonAttack (player1, player2);




