let perguntas = [
  "Você gosta de visitar o campo?",
  "Você já plantou alguma coisa?",
  "Você gosta de passeios ao ar livre?",
  "Você conhece algum produtor rural?",
  "Você acha importante preservar as florestas?",
  "Você já foi a uma feira na cidade?",
  "Você gosta de andar de bicicleta no parque?",
  "Você já visitou uma fazenda?",
  "Você acha que a cidade precisa do campo?",
  "Você já viu uma colheita?",
  "Você gosta de alimentos orgânicos?",
  "Você já participou de alguma festa típica do campo?",
  "Você gosta da vida agitada da cidade?",
  "Você acha importante ter áreas verdes na cidade?",
  "Você gostaria de morar no campo?"
];

let respostas = [];
let perguntaAtual = 0;
let totalAcertos = 0;
let jogoAcabou = false;

let corBase = 100; // valor inicial da cor
let incrementoCor = 10; // quanto a cor aumenta a cada pergunta

function setup() {
  createCanvas(600, 400);
  textAlign(CENTER, CENTER);
  textSize(24);
}

function draw() {
  let corAtual = corBase + perguntaAtual * incrementoCor;
  background(corAtual % 255, 200, corAtual % 255);

  if (!jogoAcabou) {
    fill(0);
    text("Pergunta " + (perguntaAtual + 1) + " de " + perguntas.length, width/2, 50);
    text(perguntas[perguntaAtual], width/2, height/2);
    textSize(18);
    text('Pressione "s" para SIM ou "n" para NÃO', width/2, height - 50);
    textSize(24);
  } else {
    fill(0, 100, 0);
    textSize(30);
    text("Fim do Jogo!", width/2, height/2 - 50);
    textSize(24);
    text("Você respondeu " + totalAcertos + " vezes 'Sim'.", width/2, height/2);
    text("Obrigado por jogar!", width/2, height/2 + 50);
  }
}

function keyPressed() {
  if (!jogoAcabou) {
    if (key === 's' || key === 'S') {
      respostas.push("Sim");
      totalAcertos++;
      proximaPergunta();
    } else if (key === 'n' || key === 'N') {
      respostas.push("Não");
      proximaPergunta();
    }
  }
}

function proximaPergunta() {
  perguntaAtual++;
  if (perguntaAtual >= perguntas.length) {
    jogoAcabou = true;
  }
}
