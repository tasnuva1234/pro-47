class Player{
    constructor(){
      this.isWinnner = false
      this.pressedPosition = []
      this.chances = 0;
    }
 
  start(){
      var i;
   for(i=0; i<=35; i++){
     if(mousePressedOver(arr[i])&&this.chances<4){
        this.pressedPosition.push(i)
        this.chances = this.chances+1;
     }
    
     if(this.chances>=4){
        var s = this.pressedPosition[0]
        var expectedH = [s, s+1, s+2, s+3]
        var expectedV = [s, s+7, s+14, s+21]
         
        this.isWinner = this.pressedPosition.forEach(e =>{
         var r = expectedH.includes(e)
         console.log(r);
        })

       console.log(this.isWinner);

     }//Endine bracket of line 16

   }

  }

}