class Contestant {
  constructor(){
    this.index = null;
    this.answer = 0;
    this.name = null;
  }

  getCount(){
    var playerCountRef = database.ref('contestantCount');
    playerCountRef.on("value",function(data){
      contestantCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      contestantCount: count
    });
  }

  update(name){
    var playerIndex = "contestants/contestant" + this.index;
    database.ref(playerIndex).set({
      name:this.name,
      answer:this.answer
    });
  }

static getPlayerInfo(){
 var playerInfoRef = database.ref('contestants');
 playerInfoRef.on("value",(data)=>{ 
  allPlayers = data.val();
   })
  }
}
