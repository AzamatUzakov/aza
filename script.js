let companies = [
    {
        name: 'sheroz_io',
        budget: 75000,
        tax: 12,
        expensesPerYear: [5000, 3000, 25000]
    },
    {
        name: 'shavkat_mnogogovority',
        budget: 125000,
        tax: 14,
        expensesPerYear: [10000, 4500, 60000]
    },
    {
        name: 'kamoliddin_posuda',
        budget: 150000,
        tax: 12,
        expensesPerYear: [70000, 2000, 15000]
    },
    {
        name: 'azamat_niche',
        budget: 90000,
        tax: 7,
        expensesPerYear: [21000, 1000, 6000]
    },
    {
        name: 'muhammad',
        budget: 80000,
        tax: 14,
        expensesPerYear: [10000, 500, 1680]
    },
    {
        name: 'firuz_nosbiznes',
        budget: 195000,
        tax: 21,
        expensesPerYear: [7000, 15000, 5000]
    },
    {
        name: 'azim_trans_mchj',
        budget: 200000,
        tax: 12,
        expensesPerYear: [70000, 12000, 5000]
    },
    {
        name: 'malika_beaty_salon',
        budget: 150000,
        tax: 12,
        expensesPerYear: [40000, 5000, 7000]
    },
]

for (q of companies) {
    let money = q.expensesPerYear
    let p = money.reduce((a, b) => a + b)
    let bolak = p / q.tax
    let g = p - bolak
    let oxir = Math.round(g / 12)
    document.write(` У компании ${q.name}  налог за месяц ${oxir} $ <br>`);
}

document.write(`<hr>`)

for (s of companies) {
    let dolor = s.expensesPerYear
    let k = dolor.reduce((a, b) => a + b);
    let b = Math.round(k / 12)
    document.write(` У компании ${s.name} расходы за месяй ${b} $ <br>`);
}

document.write(`<hr>`)

for (w of companies) {
    let bujet = Math.round(w.budget / 12)
    document.write(` У компании ${w.name} бьюджет за месяц ${bujet} $ <br>`);
}

document.write(`<hr>`)

for (c of companies) {
    let e = c.expensesPerYear
    let y = e.reduce((a, b) => a + b)
   let o = y *100
    let r = Math.round( o / c.budget)
    document.write(`Соотношение бьюджета и расходов ${r}<br>`);
}


// найти расходы за месяц (включая налог)
// найти расходы за месяц
// найти бьюджет за месяц
// найти соотношение бьюджета и расходов показать