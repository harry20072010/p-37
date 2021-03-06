var canvas;
var gameState = 0;
var contestantCount = 0;
var answer,question,contestant,quiz;
var database;

function setup(){
  canvas = createCanvas(850,400);
  database = firebase.database();
  quiz = new Quiz();
  quiz.getState();
  quiz.start();

}


function draw(){
  background("pink");

  
}
