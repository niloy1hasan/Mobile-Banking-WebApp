/* start declaration part */

/* menu button section */
const menuBtnAddMoney = document.getElementById('add-money-menu-btn');
const menuBtnCashout = document.getElementById('cashout-menu-btn');

/* section's section */
const addMoneySection = document.getElementById('add-money-section');
const cashoutSection = document.getElementById('cashout-section');

/* add money section */
const addMoneyBtn = document.getElementById('add-money-btn');
const userAccountNumber = document.getElementById('bank-account-number');
const userPin = document.getElementById('user-pin');
const userAddMoneyAmount = document.getElementById('money-amount');
const userSelectedBank = document.getElementById('user-selected-bank');
const userBalance = document.getElementById('balanceAmount');

/* cashout section */
const agentNumber = document.getElementById('agent-number');
const cashoutAmount = document.getElementById('cashout-amount');
const cashoutUserPIN = document.getElementById('cashout-user-pin');
const withdrawBtn = document.getElementById('withdraw-btn');

/* end declaration part */
// 
/* start function part */

function toggleMenu(visibleItem){
    addMoneySection.style.display = 'none';
    cashoutSection.style.display = 'none';

    visibleItem.style.display = 'block';
    visibleItem.cl = 'block';
    visibleItem.style.display = 'block';
}


function userAuth(accountNumber, password){
const account = '00123456789';
const pin = '1234';

if(accountNumber!==account){
        alert("Account Number not found");
        return false;
    } else if(password!==pin){
        alert("Pin is wrong");
        return false;
    }

return (account===accountNumber && password===pin);
}

/* end function part */
// 
/* start event listener part */

/* menu button */

menuBtnAddMoney.addEventListener("click", function(event){
    event.preventDefault();
    toggleMenu(addMoneySection);
});

menuBtnCashout.addEventListener("click", function(event){
    event.preventDefault();
    toggleMenu(cashoutSection);
});
    



/* add money */
addMoneyBtn.addEventListener("click", function(event){
    event.preventDefault();
    
    let givenAccountNumber = userAccountNumber.value;
    let giverUserPin = userPin.value;
    if(!userAuth(givenAccountNumber, giverUserPin)) return;

    
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

/* cashout money */
withdrawBtn.addEventListener("click", function(event){
    event.preventDefault();
    let givenAccountNumber = agentNumber.value; 
    let giverUserPin = cashoutUserPIN.value;
    if(!userAuth(givenAccountNumber, giverUserPin)) return;

    let amount = parseInt(userBalance.innerText);
    if(amount>0){
    amount -= parseInt(cashoutAmount.value);
    userBalance.innerText = amount;
    agentNumber.value = "";
    cashoutUserPIN.value = "";
    cashoutAmount.value = "";
    } else {
        alert("Given amount is not valid");
    }
});


/* end event listener part */
