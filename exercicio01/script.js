// Vamos praticar o uso de variáveis em um exercício de cálculo de média. Você precisa escrever um programa em JavaScript que peça ao usuário para digitar três números. Depois disso, você deve usar variáveis para armazenar esses números e calcular a média entre eles. Por fim, seu programa deve exibir o resultado da média na tela.
var n1 = prompt("Digite o primeiro número");
var n2 = prompt("Digite o segundo número");
var n3 = prompt("Digite o terceiro número");
var resultado = (Number(n1) + Number(n2) + Number(n3))/3;
alert("o resultado da média é: " + resultado);