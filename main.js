import { getCurrencyName } from './currency.js';

function reset_div() {
    document.getElementById("error").innerHTML = "";
    document.getElementById("result").innerHTML = "";
}

// Récupérer les devises pour les mettres dans notre select pour faire une liste d'option
async function getCurrencies() {
    const response = await fetch(`https://www.frankfurter.app/latest`);
    const data = await response.json();
    const currencies = Object.keys(data.rates);


    const baseCurrencySelect = document.getElementById("baseCurrency");
    const targetCurrencySelect = document.getElementById("targetCurrency");

    currencies.forEach(currency => {
        const option = document.createElement("option");
        option.value = currency;
        option.text = `${currency} - ${getCurrencyName(currency)}`;
        baseCurrencySelect.add(option.cloneNode(true));
        targetCurrencySelect.add(option);
    });

}


// Convertir le montant de la devise de base à la devise cible
async function convertCurrency() {
    reset_div();
    const amount = document.getElementById("amount").value;
    const baseCurrency = document.getElementById("baseCurrency").value;
    const targetCurrency = document.getElementById("targetCurrency").value;

    try {

        if (amount == '') {
            document.getElementById("error").textContent = "Vous n'avez pas saisie de nombre !";
            return;
        }

        if (amount < 0 || isNaN(amount)) {
            document.getElementById("error").textContent = "Veuillez entrer un montant supérieur à zéro.";
            return;
        }


        if (amount == '0' ) {
            document.getElementById("error").textContent = "ça fais 0 partout :)";
            return;
        }

        if (baseCurrency === targetCurrency) {
            document.getElementById("error").textContent = "La devise de base et la devise cible ne peuvent pas être les mêmes.";
            return;
        }

        const host = 'api.frankfurter.app';
        if (targetCurrency === "all") {


            const response = await fetch(`https://${host}/latest?amount=${amount}&from=${baseCurrency}`);
            const data = await response.json();

            const resultDiv = document.getElementById("result");

            const resultTable = document.createElement("table");

  
            const headerRow = resultTable.insertRow(0);
            const headerCell1 = headerRow.insertCell(0);
            const headerCell2 = headerRow.insertCell(1);

            headerCell1.textContent = "Devise";
            headerCell2.textContent = "Montant équivalent";


            Object.keys(data.rates).forEach(currency => {
                const row = resultTable.insertRow(-1);
                const cell1 = row.insertCell(0);
                const cell2 = row.insertCell(1);

 
                cell1.textContent = currency;
                cell2.textContent = `${data.rates[currency].toFixed(2).replace(".", ",")} ${getCurrencyName(currency)}`;

            });

            resultDiv.innerHTML = ""; 
            resultDiv.appendChild(resultTable);
        } else {

            const response = await fetch(`https://${host}/latest?amount=${amount}&from=${baseCurrency}&to=${targetCurrency}`);
            const data = await response.json();

            const resultDiv = document.getElementById("result");
            resultDiv.textContent = `${amount} ${getCurrencyName(baseCurrency)} équivaut à ${data.rates[targetCurrency].toFixed(2).replace(".", ",")} ${getCurrencyName(targetCurrency)}`;
        }
    } catch (error) {
        console.error("Erreur de conversion :", error);
    }
}

window.getCurrencies = getCurrencies;
window.convertCurrency = convertCurrency;

document.addEventListener("DOMContentLoaded", () => {
    getCurrencies();
});
