'use strict'
function calculateProfit(amount, period, percent) {
    //amount — первоначальная сумма вклада (капитал),
    //period — количество месяцев начисления процентов по привлеченному вкладу,
    const countMonth = 1 //количество месяцев начисления процентов по привлеченному вкладу
    const N = period / 1;//— число периодов начисления процентов.
    const totalMonthsYear = 12;//— количество месяцев в календарном году
    return amount * (Math.pow((1 + percent * countMonth / totalMonthsYear / 100), N) - 1); //расчет суммы процентов (дохода)
}
function listenerSubmit(evt) {
    evt.preventDefault();
    totalEl.textContent = '';
    profitEl.textContent = '';
    percentEl.textContent = '';
    const percents = {
        3: 2,
        6: 2.2,
        9: 2.3,
        12: 2.6,
        18: 2.7,
    }
    const amountInput = Number(amountInputEl.value);
    const periodInput = Number(periodInputEl.value);
    const percent = percents[periodInput];
    let profit = calculateProfit(amountInput, periodInput, percent);
    profit = Number(profit.toFixed(0));
    totalEl.textContent = `${amountInput + profit}`;
    profitEl.textContent = `${profit}`;
    percentEl.textContent = percent;
}
const formEl = document.getElementById('deposit-form');
formEl.addEventListener('submit', listenerSubmit);
const amountInputEl = document.getElementById('amount-input'); //сумма вклада(К — первоначальная сумма вклада (капитал))
const periodInputEl = document.getElementById('period-input');//d — количество дней(месяцев) начисления процентов по привлеченному вкладу,
const totalEl = document.getElementById('total');//S — сумма вклада с процентами,
const profitEl = document.getElementById('profit');//Sp — сумма процентов (доход),
const percentEl = document.getElementById('percent');//P — годовая процентная ставка,



