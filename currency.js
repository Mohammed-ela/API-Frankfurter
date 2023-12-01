// Objet associant les codes de devise à leurs noms
const currencyNames = {
    USD: 'Dollar américain',
    EUR: 'Euro',
    GBP: 'Livre sterling',
    JPY: 'Yen japonais',
    AUD: 'Dollar australien',
    CAD: 'Dollar canadien',
    CHF: 'Franc suisse',
    CNY: 'Yuan chinois',
    SEK: 'Couronne suédoise',
    NZD: 'Dollar néo-zélandais',
    MXN: 'Peso mexicain',
    SGD: 'Dollar singapourien',
    HKD: 'Dollar de Hong Kong',
    NOK: 'Couronne norvégienne',
    KRW: 'Won sud-coréen',
    TRY: 'Livre turque',
    INR: 'Roupie indienne',
    BRL: 'Real brésilien',
    ZAR: 'Rand sud-africain',
    RUB: 'Rouble russe',
    AED: 'Dirham des Émirats arabes unis',
    ARS: 'Peso argentin',
    CLP: 'Peso chilien',
    COP: 'Peso colombien',
    EGP: 'Livre égyptienne',
    IDR: 'Roupie indonésienne',
    ILS: 'Nouveau shekel israélien',
    MYR: 'Ringgit malaisien',
    PHP: 'Peso philippin',
    PLN: 'Zloty polonais',
    SAR: 'Riyal saoudien',
    THB: 'Baht thaïlandais',
    TWD: 'Nouveau dollar taïwanais',
    VND: 'Dong vietnamien',
    ISK: 'Couronne islandaise',
    RON: 'Leu roumain',
    BGN: 'Lev bulgare',
    CZK: 'Couronne tchèque',
    DKK: 'Couronne danoise',
    HUF: 'Forint hongrois',
};

// on renvois le nom de la devise sinon on garde l'abreviation
function getCurrencyName(currencyCode) {
    return currencyNames[currencyCode] || currencyCode;
}

export { currencyNames, getCurrencyName };
