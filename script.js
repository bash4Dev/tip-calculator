const billInput = document.getElementById('input1');
const peopleInput = document.getElementById('input2');
const errorMsg = document.getElementById('error-mgs');
const tipBtns = document.querySelectorAll('.tip-btn');
const tipAmount = document.getElementById("tip-qty");
const totalAmount = document.getElementById("total-qty");

tipAmount.innerText = `$0`;
totalAmount.innerText = `$0`;

const edgeCases = (input) => {
    if (input === 0) {
        tipAmount.innerText = `$0`;
        totalAmount.innerText = `$0`;
    } else if (input <= 0) {
        errorMsg.style.display = "block";
        errorMsg.innerText = "Can't be zero";
    } else {
        errorMsg.style.display = "none";
    }
}

const calculateAmounts = () => {
    let billAmount = parseFloat(billInput.value);
    let numOfPeople = parseInt(peopleInput.value);

    edgeCases(billAmount);
    edgeCases(numOfPeople);

    // Calculate tip amount per person
    tipBtns.forEach(tip => {
        tip.addEventListener("click", () => {
            // Convert tip value to a number
            const convertToNum = tip.value.replace(/\%$/g, '');
            const tipPercentile = Number(convertToNum / 100);

            // Calculate the total & tip amounts per person
            const totalTipAmount = (billAmount * tipPercentile) / numOfPeople;
            const totalAmountPerPerson = (billAmount / numOfPeople) + totalTipAmount;

            tipAmount.innerText = `$${totalTipAmount.toFixed(2)}`;
            totalAmount.innerText = `$${totalAmountPerPerson.toFixed(2)}`;

            // Handle custom button
            // if (tip.classList.contains("custom")) {
            //     console.log("Clicked")
            // }
        });
    });
}

const initializeTipCalc = () => {
    tipBtns.forEach(tip => {
        tip.addEventListener("click", () => {
            calculateAmounts();
        });
    });
}

billInput.addEventListener("input", calculateAmounts);
peopleInput.addEventListener("input", calculateAmounts);
initializeTipCalc();

document.getElementById('reset-btn').addEventListener('click', () => {
    billInput.value = '';
    peopleInput.value = '';
    tipAmount.innerText = `$0`;
    totalAmount.innerText = `$0`;
    errorMsg.style.display = "none";
});