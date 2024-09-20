const billInput = document.getElementById('input1').value;
const numOfPeople = document.getElementById('input2');
const errorMsg = document.getElementById('error-mgs');
const tipBtns = document.querySelectorAll('.tip-btn');
const tipAmount = document.getElementById("tip-qty");
const totalAmount = document.getElementById("total-qty");

tipAmount.innerText = `$${0}`;
totalAmount.innerText = `$${0}`;

const edgeCases = () => {
    // if bill is 0, return 0 for tip and total amount per person
    if (billInput === 0) {
        tipAmount.innerText = `$${0}`;
        totalAmount.innerText = `$${0}`;
    } else if (numOfPeople === 0 || numOfPeople < 0) {
        errorMsg.innerText = "Can't be zero";
    }
}
edgeCases();

function inputValues() {
    console.log(billInput);
}

function calCulations() {
    // Calculate tip amount per person
    tipBtns.forEach(tip => {
        tip.addEventListener("click", () => {
            // Convert tip value to a number
            const convertToNum = tip.value.replace(/\%$/g, '');
            // const tipCount = convertToNum / 100;
            console.log(convertToNum);

            // Calculate the total tip amount per person
            // const totalTipAmount = (billInput * convertToNum) / numOfPeople;
            inputValues()

            // Calculate the total amount per person
            // const totalAmountPerPerson = (billInput + totalTipAmount) / numOfPeople;

            
            // Handle custom button
            // if (tip.classList.contains("custom")) {
            //     console.log("Clicked")
            // }
        });
    });
}

calCulations()