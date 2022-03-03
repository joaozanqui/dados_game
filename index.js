function game() {
    var randomNumber1 = Math.floor(Math.random()*6+1);
    var randomNumber2 = Math.floor(Math.random()*6+1);
    var randomImage1 = "images/dado-" + randomNumber1 + ".png";
    var randomImage2 = "images/dado-" + randomNumber2 + ".png";


    document.querySelector("#dado-esq").setAttribute("src", randomImage1);
    document.querySelector("#dado-dir").setAttribute("src", randomImage2);

    if(randomNumber1>randomNumber2) {
        document.querySelector("#title-top").innerHTML = "Vencedor: Jogador 1";
    }
    else if(randomNumber1<randomNumber2) {
        document.querySelector("#title-top").innerHTML = "Vencedor: Jogador 2";
    }
    else {
        document.querySelector("#title-top").innerHTML = "Empate";
    }
}

/* Copiar texto */
function copyPaste() {
    /* Get the text field */
  var copyText = "jpzanqui@hotmail.com";
  navigator.clipboard.writeText(copyText);

  document.querySelector("#btn-copy").innerHTML = "Copiado !";
  }