function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}
let car;
let obstacles = [];
let roadX;
let roadWidth = 300;

  function draw() {
    createCanvas(600, 600);
    car = new Car();
    roadX = width / 2 - roadWidth / 2;
  }

function draw() {
  background(50, 150, 50); // grama
  
  // Linhas da estrada
  fill(50);
  rect(roadX, 0, roadWidth, height);

  // Linhas da estrada
  stroke(255);
  strokeWeight(4);
  for (let i = 0; i < height; i += 40) {
    line(width / 2, i, width / 2, i, + 20);
  }
  noStorke();
  
  // Atualizar e dessenhar carro 
  car.updte();
  car.show();
  
  // Gerar obstaculos 
  if (FrameCount % 60 === 0) {
    odstacles.push(new Obstacle());

  }
  
  // Atualizar e desenhar obstáculos
  for (let i = obstacles.length - 1; i >= 0;
       obstacles[i].update();
       obstacles[i].show();
  
  // Verificar colis
}
