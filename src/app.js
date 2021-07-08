/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  console.log("Hello Rigo from the console!");
  let who = ["the dog", "my granma", "his turtle", "my bird"];
  let what = ["eat", "pissed", "crushed", "broked"];
  let when = [
    "before the class",
    "right in time",
    "when I finished",
    "during my lunch",
    "while I was praying"
  ];
  let test =
    who[Math.floor(Math.random() * who.length)] +
    " " +
    what[Math.floor(Math.random() * what.length)] +
    " " +
    when[Math.floor(Math.random() * when.length)];

  let element = document.getElementById("excuse");
  element.innerHTML = test;
};

// Usando javascript, crea una función que genere y devuelva una excusa aleatoria con la siguiente estructura:
// let who = ['the dog','my granma','his turtle','my bird'];
// let what = ['eat','pissed','crushed','broked'];
// let when = ['before the class','right in time','when I finished','during my lunch','while I was praying'];
// Para crear una excusa consistente, tiene que concatenar un elemento de cada array o arreglo en el orden correcto.
// Llame a esa función onLoad y establezca la excusa en el innerHTML del elemento HTML #excuse.
