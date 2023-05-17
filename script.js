document.getElementById('calcular-btn').addEventListener('click', function() {
    var valorSacolas = parseFloat(document.getElementById('valor-sacolas').value.replace(',', '.'));
    var valorItens = parseFloat(document.getElementById('valor-itens').value.replace(',', '.'));
    var quantidadePessoas = parseInt(document.getElementById('quantidade-pessoas').value);
  
    if (isNaN(valorSacolas) || isNaN(valorItens) || isNaN(quantidadePessoas)) {
      alert('Por favor, preencha todos os campos obrigatórios.');
      return;
    }
  
    var valorTotal = valorSacolas + valorItens;
    var valorPlayer = valorTotal * 0.65;
    var valorGuilda = valorTotal * 0.35;
    var valorPorPessoa = valorPlayer / quantidadePessoas;
  
    document.getElementById('valor-total').innerText = formatarNumero(valorTotal, 'BRL');
    document.getElementById('valor-player').innerText = formatarNumero(valorPlayer, 'BRL');
    document.getElementById('valor-guilda').innerText = formatarNumero(valorGuilda, 'BRL');
    document.getElementById('valor-por-pessoa').innerText = formatarNumero(valorPorPessoa, 'BRL');
  
    mostrarResultado();
  });
  
  function mostrarResultado() {
    var resultadoItems = document.querySelectorAll('.resultado-item');
  
    resultadoItems.forEach(function(item) {
      item.classList.add('animate-fade');
    });
  
    document.getElementById('resultado').classList.remove('hidden');
  }
  
  function formatarNumero(numero, moeda) {
    var options = {
      style: 'currency',
      currency: moeda,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    };
  
    return numero.toLocaleString('pt-BR', options);
  }