let posx = 50;
let velocidade = 5;
let movimento = false;

function setup() {
  // Cria a tela com o tamanho do navegador e remove margens para evitar overflow
  document.body.style.margin = '0';
  document.body.style.overflow = 'hidden';
  const c = createCanvas(windowWidth, windowHeight);
  c.position(0, 0);
  c.style('display', 'block');
}

function draw() {
  //Dar cor ao plano de fundo
  background(0);
  circle (posx,100,100);
  if (movimento == true){
    mover();
  }
  if (posx > width - 50) {
    posx = width - 50;
    velocidade = velocidade * -1;
  }
  if (posx < 50) {
    posx = 50;
    velocidade = velocidade * -1;
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

function mousePressed() {
  movimento = !movimento;
}

function mover(){
  posx = posx + velocidade;
}