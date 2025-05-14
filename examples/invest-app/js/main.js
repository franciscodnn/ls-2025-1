import { investments } from './data.js';
import { InvestmentCard } from './components/InvestmentCard.js';

console.log(investments[0]);

function addInvestment(investment) {
    // 1. obter div com grid dos investments
    const gridInvestments = document.querySelector('.investments')

    // 2. ativar a função de componente InvestmentCard
    const newInvestmentCard = InvestmentCard(investment);

    // 3. inserir o componente criado
    gridInvestments.insertAdjacentHTML('afterbegin', newInvestmentCard);
}

addInvestment(investments[0]);

addInvestment(investments[1]);