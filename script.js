let i = 1;
let dado1 = 0;
let dado2 = 0;
let resultados = [];

dado1 = Math.floor(Math.random() * 6) + 1;
dado2 = Math.floor(Math.random() * 6) + 1;

let lista1 = document.createElement("li");

let tagDado1 = document.createElement("p");
tagDado1.innerText = "Resultado dado 1: valor " + dado1;

let tagDado2 = document.createElement("p");
tagDado2 = "Resultado dado 2 : valor " + dado2;

lista1.append(tagDado1, tagDado2);

let container1 = document.querySelector(".container1");
container1.appendChild(lista1);

while (i <= 1000) {
  dado1 = Math.floor(Math.random() * 6) + 1;
  dado2 = Math.floor(Math.random() * 6) + 1;
  resultados.push(dado1 + dado2);
  i++;
}

let r2 = 0;
let r3 = 0;
let r4 = 0;
let r5 = 0;
let r6 = 0;
let r7 = 0;
let r8 = 0;
let r9 = 0;
let r10 = 0;
let r11 = 0;
let r12 = 0;

for (let index = 0; index < resultados.length; index++) {
  if (resultados[index] == 2) {
    r2 += 1;
  } else if (resultados[index] == 3) {
    r3 += 1;
  } else if (resultados[index] == 4) {
    r4 += 1;
  } else if (resultados[index] == 5) {
    r5 += 1;
  } else if (resultados[index] == 6) {
    r6 += 1;
  } else if (resultados[index] == 7) {
    r7 += 1;
  } else if (resultados[index] == 8) {
    r8 += 1;
  } else if (resultados[index] == 9) {
    r9 += 1;
  } else if (resultados[index] == 10) {
    r10 += 1;
  } else if (resultados[index] == 11) {
    r11 += 1;
  } else if (resultados[index] == 12) {
    r12 += 1;
  }
}

let container = document.querySelector(".container");

let tagLi = document.createElement("li");
let re2 = document.createElement("p");
let re3 = document.createElement("p");
let re4 = document.createElement("p");
let re5 = document.createElement("p");
let re6 = document.createElement("p");
let re7 = document.createElement("p");
let re8 = document.createElement("p");
let re9 = document.createElement("p");
let re10 = document.createElement("p");
let re11 = document.createElement("p");
let re12 = document.createElement("p");

let g2 = document.createElement("p");
let g3 = document.createElement("p");
let g4 = document.createElement("p");
let g5 = document.createElement("p");
let g6 = document.createElement("p");
let g7 = document.createElement("p");
let g8 = document.createElement("p");
let g9 = document.createElement("p");
let g10 = document.createElement("p");
let g11 = document.createElement("p");
let g12 = document.createElement("p");

re2.innerText = "Valor 2: " + r2 + " vezes";
re3.innerText = "Valor 3: " + r3 + " vezes";
re4.innerText = "Valor 4: " + r4 + " vezes";
re5.innerText = "Valor 5: " + r5 + " vezes";
re6.innerText = "Valor 6: " + r6 + " vezes";
re7.innerText = "Valor 7: " + r7 + " vezes";
re8.innerText = "Valor 8: " + r8 + " vezes";
re9.innerText = "Valor 9: " + r9 + " vezes";
re10.innerText = "Valor 10: " + r10 + " vezes";
re11.innerText = "Valor 11: " + r11 + " vezes";
re12.innerText = "Valor 12: " + r12 + " vezes";

g2.innerText = "";
g2.style.backgroundColor = "red";
g2.style.width = r2 + "px";
g2.style.height = "10px";

g3.innerText = "";
g3.style.backgroundColor = "red";
g3.style.width = r3 + "px";
g3.style.height = "10px";

g4.innerText = "";
g4.style.backgroundColor = "red";
g4.style.width = r4 + "px";
g4.style.height = "10px";

g5.innerText = "";
g5.style.backgroundColor = "red";
g5.style.width = r5 + "px";
g5.style.height = "10px";

g6.innerText = "";
g6.style.backgroundColor = "red";
g6.style.width = r6 + "px";
g6.style.height = "10px";

g7.innerText = "";
g7.style.backgroundColor = "red";
g7.style.width = r7 + "px";
g7.style.height = "10px";

g8.innerText = "";
g8.style.backgroundColor = "red";
g8.style.width = r8 + "px";
g8.style.height = "10px";

g9.innerText = "";
g9.style.backgroundColor = "red";
g9.style.width = r9 + "px";
g9.style.height = "10px";

g10.innerText = "";
g10.style.backgroundColor = "red";
g10.style.width = r10 + "px";
g10.style.height = "10px";

g11.innerText = "";
g11.style.backgroundColor = "red";
g11.style.width = r11 + "px";
g11.style.height = "10px";

g12.innerText = "";
g12.style.backgroundColor = "red";
g12.style.width = r12 + "px";
g12.style.height = "10px";

tagLi.innerText = "Resultados:\n* resultado numérico acima e sua representação gráfica abaixo: \n\n";

tagLi.append(
  re2,
  g2,
  re3,
  g3,
  re4,
  g4,
  re5,
  g5,
  re6,
  g6,
  re7,
  g7,
  re8,
  g8,
  re9,
  g9,
  re10,
  g10,
  re11,
  g11,
  re12,
  g12
);

container.appendChild(tagLi);

console.log(resultados);
