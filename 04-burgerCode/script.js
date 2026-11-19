// 1. Função para adicionar o item ao visor
function adicionarItem(item) {
  let visor = document.getElementById("visor-pedido");

  if (visor.value === "" || visor.value === "Seu pedido aparecerá aqui...") {
    visor.value = item;
  } else {
    visor.value = visor.value + " + " + item;
  }
}

// ====================================================
// EXERCÍCIO 2: Continue a lógica abaixo para calcular
// o total ou processar o pedido quando o botão for acionado
// ====================================================
function calcularTotal() {
  let visor = document.getElementById("visor-pedido");
  let textoPedido = visor.value;
  let total = 0;

  if (textoPedido === "" || textoPedido.startsWith("Total a pagar:")) {
    return;
  }

  let itens = textoPedido.split(" + ");

  for (let i = 0; i < itens.length; i++) {
    let itemAtual = itens[i];

    if (itemAtual.includes("Hambúrguer")) {
    total += 15.00;

    }
    if (itemAtual.includes("Refrigerante")) {
    total += 5.00;

  }
    if (itemAtual.includes("Batata frita")) {
    total += 8.00;

  }
}
visor.value=((`sua compra deu R$${total}`));
}
  // Continue a lógica para quando incluir Batata Frita ou Refrigerante...


// ====================================================
// EXERCÍCIO 3: Crie a função limparPedido() para resetar o visor
// ====================================================
