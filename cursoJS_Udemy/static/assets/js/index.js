
class ControleRemoto{
  constructor(tv){
    this.tv = tv;
    this.volume = 0;
  }

  aumentarVolume(){
    this.volume += 2;
  }

  diminuirVolume(){
    this.volume -= 2;
  }

  static soma(x,y){
    console.log(this);
    return x+y;
  }
}


const controle1 = new ControleRemoto("LG");
ControleRemoto.soma(2,5);