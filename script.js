// Função para calcular o valor futuro do investimento
function calculateInvestment(monthlyInvestment, months, monthlyInterestRate) {
    let futureValue = 0;
    const rate = monthlyInterestRate / 100;

    for (let i = 0; i < months; i++) {
        futureValue = (futureValue + monthlyInvestment) * (1 + rate);
    }

    return futureValue;
}

// Manipulador de eventos para o formulário
document.getElementById('investment-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Obtendo valores do formulário
    const monthlyInvestment = parseFloat(document.getElementById('monthly-investment').value);
    const months = parseInt(document.getElementById('investment-period').value, 10);
    const interestRate = parseFloat(document.getElementById('interest-rate').value);

    // Calculando o valor futuro
    const futureValue = calculateInvestment(monthlyInvestment, months, interestRate);

    // Exibindo o resultado na página
    const resultElement = document.getElementById('result');
    resultElement.textContent = `R$${futureValue.toFixed(2)}`;
});
