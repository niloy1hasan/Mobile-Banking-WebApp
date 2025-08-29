const addMoneyBtn = document.getElementById('add-money-btn');
const userAccountNumber = document.getElementById('bank-account-number');
const userPin = document.getElementById('user-pin');
const userAddMoneyAmount = document.getElementById('money-amount');
const userSelectedBank = document.getElementById('user-selected-bank');
const userBalance = document.getElementById('balanceAmount');

const account = '01234567891';
const pin = '1234';

addMoneyBtn.addEventListener("click", function(event){
    event.preventDefault();
    
    givenAccountNumber = userAccountNumber.value;
    giverUserPin = userPin.value;

    if(givenAccountNumber!==account){
        alert("Account Number not found");
        return;
    } else if(giverUserPin!==pin){
        alert("Pin is wrong");
        return;
    }

    let amount = parseInt(userAddMoneyAmount.value);
    if(amount>0){
    amount += parseInt(userBalance.innerText);
    userBalance.innerText = amount;
    userAddMoneyAmount.value = "";
    userAccountNumber.value = "";
    userPin.value = "";
    } else {
        alert("Given amount is not valid");
    }

    
});