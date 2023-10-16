const currentRate = {
    cbn: {
      usd: 588.0,
      eur: 640.0,
      gbp: 745.0,
    },

    blackMarket: {
      usd: 962.0,
      eur: 1032.0,
      gbp: 1195.0,
    },
    bureauDeChange: {
      usd: 598.0,
      eur: 455.0,
      gbp: 763.0,
    },
    moneyGray: {
      usd: 450,
      eur: 600,
      gbp: 700,
    },
    westernUnion: {},
    fx: {},
    date: '',
    id: '',
  };
// ["usd", "gbp", "eur"] maps to  [950,456,567]
  const conversionRates = {
    "Black Market" : [950,456,567],
    "Central Bank of Nigeria" : [1000,390,567],
    "Bureau De Change" : [500, 670, 780],
    "Moneygram" : [800, 650,750],
    "Western Union" : [450,390,567],
    "Fx": [950, 450, 750]
}