/* start declaration part */

/* menu button section */
const menuBtnAddMoney = document.getElementById('add-money-menu-btn');
const menuBtnCashout = document.getElementById('cashout-menu-btn');

/* add money section */
const addMoneyBtn = document.getElementById('add-money-btn');
const userSelectedBank = document.getElementById('user-selected-bank');
const userBalance = document.getElementById('balanceAmount');

/* cashout section */
const withdrawBtn = document.getElementById('withdraw-btn');

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


/* end event listener part */
