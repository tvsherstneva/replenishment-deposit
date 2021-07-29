'use strict';

function calculateProfit(amount, period, percent) {
    //amount — первоначальная сумма вклада (капитал),
    //period — количество месяцев начисления процентов по привлеченному вкладу,
    const countMonth = 1; //количество месяцев начисления процентов по привлеченному вкладу
    const numberPeriods = period / 1;//— число периодов начисления процентов.
    const totalMonthsYear = 12;//— количество месяцев в календарном году
    return amount * (Math.pow((1 + percent * countMonth / totalMonthsYear / 100), numberPeriods) - 1); //расчет суммы процентов (дохода)
}

function listenerSubmit(evt) {
    evt.preventDefault();
    totalEl.textContent = '';
    profitEl.textContent = '';
    percentEl.textContent = '';
    amountErrorEl.textContent = '';
    periodErrorEl.textContent = '';
    const percents = {
        3: 2,
        6: 2.2,
        9: 2.3,
        12: 2.6,
        18: 2.7,
    };
    const minAmount = 15000;
    const maxAmount = 50000000;
    const amountInput = Number(amountInputEl.value);
    if (Number.isNaN(amountInput)) {
        amountErrorEl.textContent = `Сумма – не число: "Неверное значение. Введите число, например: 15000`;
        return;
    }

    if (amountInput < minAmount) {
        amountErrorEl.textContent = `Сумма меньше минимальной: "Неверное значение. Минимальная сумма: ${minAmount} ₽`;
        return;
    }
    if (amountInput > maxAmount) {
        amountErrorEl.textContent = `Сумма больше максимальной: "Неверное значение. Максимальная сумма: ${maxAmount} ₽`;
        return;
    }

    const minPeriod = 3;
    const maxPeriod = 18;
    const periodInput = Number(periodInputEl.value);
    if (Number.isNaN(periodInput)) {
        periodErrorEl.textContent = `Период – не число: "Неверное значение. Введите число месяцев, например: 3`;
        return;
    }

    if (periodInput < minPeriod) {
        periodErrorEl.textContent = `Период меньше минимального: "Неверное значение. Минимальный период: ${minPeriod} месяца`;
        return;
    }
    if (periodInput > maxPeriod) {
        periodErrorEl.textContent = `Период больше максимального: "Неверное значение. Максимальный период: ${maxPeriod} месяцев`;
        return;
    }
    const percent = percents[periodInput];
    let profit = calculateProfit(amountInput, periodInput, percent);
    profit = Number(profit.toFixed(0));
    totalEl.textContent = `${amountInput + profit}`;
    profitEl.textContent = `${profit}`;
    percentEl.textContent = percent;
}

const formEl = document.getElementById('deposit-form');
formEl.addEventListener('submit', listenerSubmit);
const amountInputEl = document.getElementById('amount-input');
const periodInputEl = document.getElementById('period-input');
const totalEl = document.getElementById('total');
const profitEl = document.getElementById('profit');
const percentEl = document.getElementById('percent');
const amountErrorEl = document.getElementById('amount-error');
const periodErrorEl = document.getElementById('period-error');
