/* start declaration part */

/* menu button section */
const menuBtnAddMoney = document.getElementById('add-money-menu-btn');
const menuBtnCashout = document.getElementById('cashout-menu-btn');
const transferMoneyBtn = document.getElementById('transfer-money-btn');
const getBonusBtn = document.getElementById('get-bonus-btn');
const payBillBtn = document.getElementById('pay-bill-menu-btn');
const transactionBtn = document.getElementById('transaction-btn');

/* add money section */
const addMoneyBtn = document.getElementById('add-money-btn');
const userSelectedBank = document.getElementById('user-selected-bank');
const userBalance = document.getElementById('balanceAmount');

/* cashout section */
const withdrawBtn = document.getElementById('withdraw-btn');

/* transfer section */
const transferSendBtn = document.getElementById('transfer-btn');

/* bonus section */
const bonusBtn = document.getElementById('bonus-btn');

/* pay bill section */
const payBtn = document.getElementById('pay-btn');

/* end declaration part */
// 
/* start function part */

function toggleMenu(id){
    const formElement = document.getElementsByClassName('formElement');

    for(const i of formElement)
        i.style.display = 'none';

    document.getElementById(id).style.display = 'block';
}


function userAuth(accountID, pinID){
const account = '00123456789';
const pin = '1234';

if(document.getElementById(accountID).value!==account){
        alert("Account Number not found");
        return false;
    } else if(document.getElementById(pinID).value!==pin){
        alert("Pin is wrong");
        return false;
    }

return true;
}

function getValue(id){
    return document.getElementById(id).value;
}

function getBalance(){
    return parseInt(document.getElementById('balanceAmount').innerText);
}

function resetValue(resetItem){
    for(const i of resetItem){
        document.getElementById(i).value = "";
    }
}

function getIntValue(id){
 return parseInt(document.getElementById(id).value);
}

function getIntText(id){
    return parseInt(document.getElementById(id).innerText);
}

/* end function part */
// 
/* start event listener part */

/* menu button */

menuBtnAddMoney.addEventListener("click", function(event){
    event.preventDefault();
    toggleMenu('add-money-section');
});

menuBtnCashout.addEventListener("click", function(event){
    event.preventDefault();
    toggleMenu('cashout-section');
});
  
transferMoneyBtn.addEventListener("click", function(event){
    event.preventDefault();
    toggleMenu('transfer-money-section');
});

getBonusBtn.addEventListener("click", function(event){
    event.preventDefault();
    toggleMenu('get-bonus-section');
});

payBillBtn.addEventListener("click", function(event){
   event.preventDefault();
   toggleMenu('pay-bill-section'); 
});



/* add money */
addMoneyBtn.addEventListener("click", function(event){
    event.preventDefault();
    if(!userAuth('bank-account-number', 'user-pin')) return;

    let amount = getIntValue('money-amount');
    if(amount>0){
    amount += getBalance();
    userBalance.innerText = amount;
    resetValue(['money-amount', 'bank-account-number', 'user-pin']);
    } else {
        alert("Given amount is not valid");
    }
});

/* cashout money */
withdrawBtn.addEventListener("click", function(event){
    event.preventDefault();

    if(!userAuth('agent-number', 'cashout-user-pin')) return;

    let amount = getIntValue('cashout-amount');;
    if(amount>0){
    amount = getBalance() - amount;
    userBalance.innerText = amount;
    resetValue(['agent-number', 'cashout-user-pin', 'cashout-amount']);
    } else {
        alert("Given amount is not valid");
    }
});

/* transfer money */

transferSendBtn.addEventListener("click", function(event){
    event.preventDefault();

    if(!userAuth('transfer-account-number', 'transfer-user-pin')) return;

    let amount = getIntValue('transfer-amount');;
    if(amount>0){
    amount = getBalance() - amount;
    userBalance.innerText = amount;
    resetValue(['transfer-account-number', 'transfer-user-pin', 'transfer-amount']);
    } else {
        alert("Given amount is not valid");
    }
});

bonusBtn.addEventListener("click", function(event){
    event.preventDefault();
    resetValue(['bonus-coupon']);
    alert('This coupon is not available');
});

payBtn.addEventListener("click", function(event){
    event.preventDefault();
    if(!userAuth('pay-bill-bank-account-number', 'pay-bill-user-pin')) return;

    let amount = getIntValue('pay-bill-money-amount');;
    if(amount>0){
    amount = getBalance() - amount;
    userBalance.innerText = amount;
    resetValue(['user-pay-bill-selected-bank', 'pay-bill-bank-account-number', 'pay-bill-user-pin', 'pay-bill-money-amount']);
    } else {
        alert("Given amount is not valid");
    }
});


/* end event listener part */
