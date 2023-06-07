class DispositivoEletronico{
  constructor(nome){
    this.nome = nome;
    this.ligado = false;
  }

  ligar(){
    if(this.ligado){
      console.log('Este dispositivo já está ligado!');
      return;
    }

    this.ligado = true;
  }
  
  desligar(){
    if(! this.ligado){
      console.log('Este dispositivo já está desligado!');
      return;
    }

    this.ligado = false;
  }
}

class Smartphone extends DispositivoEletronico{
  constructor(nome, cor, modelo){
    super(nome);
    this.cor = cor;
    this.modelo = modelo;
  }
}

class Tablet extends DispositivoEletronico{
  constructor(nome, temWifi){
    super(nome);
    this.temWifi = temWifi;
  }

  ligar(){
    console.log('o  metodo ligar que esta sendo acessado é o da classe tablet')
  }

  falaOi(){
    console.log('oi');
  }
}

const s1 = new Smartphone('Samsung', 'Preto', 'Galaxy S10');
console.log(s1);
s1.ligar();
console.log(s1);

const t1 = new Tablet('iPad', true);

t1.ligar();
t1.falaOi();