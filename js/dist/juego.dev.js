"use strict";

var vidap1 = 100;
var vidap2 = 100;
var turno = 1;
var max = 10;
var min = 1;
var ataque = 0;
var barrap1 = vidap1 * 215 / 100;
var barrap2 = vidap2 * 215 / 100;
var btn1 = Document.querySelector("#btn-player1");
var btn2 = Document.querySelector('#btn-player2');

function golpe(vida) {
  ataque = Math.floor(Math.random() * (max - min)) + min;
  vida = vida - ataque;
  console.log("el jugador 2 recibe ".concat(ataque));
  turno = 2;
  console.log("El jugador 2 le quedan ".concat(vidap2));
  return vida;
} //var barrap2 = Math.floor((vidap2 * 215) / 100);


while (vidap1 > 0 || vidap2 > 0) {
  if (turno == 1) {
    btn.addEventListener('click', golpe);
  } else {
    $("#btn-player2").click(function () {
      vidap1 = golpe(vidap1);
      console.log("el jugador 1 recibe ".concat(ataque));
      turno = 1;
      console.log("El jugador 1 le quedan ".concat(vidap1));
      var barrap2 = Math.floor(vidap2 * 215 / 100);
      $("#saludp2").width(barrap2);
    });
  }
}

if (vidap1 <= 0) {
  console.log("El jugador 2 ha ganado");
  $('#modal').show();
  $("#modal-content_winner-text-an").text("Player 2");
  $("#play-again").click(function () {
    $('#modal').fadeOut();
  });
} else {
  console.log("El jugador 1 ha ganado!! ");
  $('#modal').show();
  $("#modal-content_winner-text-an").text("Player 1");
  $("#play-again").click(function () {
    $('#modal').fadeOut();
  });
}

$(document).ready(function () {
  $("#player1-healt_avg-txt").text(vidap1);
  $("#player2-healt_avg-txt").text(vidap2);
  $("#btn-player1").click(function () {
    $("#player2-healt_avg-txt").text(vidap2);
  });
  $("#btn-player2").click(function () {
    $("#player1-healt_avg-txt").text(vidap1);
  });
});