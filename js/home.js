/* start declaration part */

const transactionHistory = [{
    name : "pay Bill",
    time : "10:12:15 PM"
}, {
    name : "Cashout",
    time : "12:02:25 AM"
}];


/* menu button section */
const menuBtnAddMoney = document.getElementById('add-money-menu-btn');
const menuBtnCashout = document.getElementById('cashout-menu-btn');
const transferMoneyBtn = document.getElementById('transfer-money-btn');
const getBonusBtn = document.getElementById('get-bonus-btn');
const payBillBtn = document.getElementById('pay-bill-menu-btn');
const transactionBtn = document.getElementById('transaction-btn');
const historySection = document.getElementById('history-section');

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

function navMenuToggle(id){
    const elements = document.getElementsByClassName('navigation-btn');
    
    for(const i of elements){
        i.classList.remove('!bg-[#0874F2]/5', '!border-[#0874F2]', '!text-[#0874F2]');
        i.classList.add('text-[#080808]/50');
    }

    id.classList.remove('text-[#080808]/50');
    id.classList.add('!bg-[#0874F2]/5', '!border-[#0874F2]', '!text-[#0874F2]');
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

function getTransaction(transaction){
    const data = {
        name : transaction,
        time : new Date().toLocaleTimeString()
    }

    return data;
}

/* end function part */
// 
/* start event listener part */

/* menu button */

menuBtnAddMoney.addEventListener("click", function(event){
    event.preventDefault();
    toggleMenu('add-money-section');
    navMenuToggle(menuBtnAddMoney);
});

menuBtnCashout.addEventListener("click", function(event){
    event.preventDefault();
    toggleMenu('cashout-section');
    navMenuToggle(menuBtnCashout);
});
  
transferMoneyBtn.addEventListener("click", function(event){
    event.preventDefault();
    toggleMenu('transfer-money-section');
    navMenuToggle(transferMoneyBtn);
});

getBonusBtn.addEventListener("click", function(event){
    event.preventDefault();
    toggleMenu('get-bonus-section');
    navMenuToggle(getBonusBtn);
});

payBillBtn.addEventListener("click", function(event){
   event.preventDefault();
   toggleMenu('pay-bill-section');
   navMenuToggle(payBillBtn); 
});

transactionBtn.addEventListener("click", function(event){
   event.preventDefault();
   toggleMenu('Transaction-section');
   navMenuToggle(transactionBtn);

   historySection.innerText = "";

   for(const data of transactionHistory){
    const element = document.createElement("div");
    console.log(data);
    element.innerHTML =  `
<div
                        class="bg-white rounded-[12px] p-3 flex justify-between items-center mb-2">
                        <div class="flex gap-3 items-center">
                            <img src="assets/wallet1.png" alt>
                            <div>
                                <h3 id="transaction-name"
                                    class="text-sm font-semibold text-[#080808]/60">${data.name}</h3>
                                <p class="text-[12px] text-[#080808]/60">${data.time}</p>
                            </div>
                        </div>
                        <div class="dropdown dropdown-left">
                            <div tabindex="0" role="button" class=""><i
                                    class="fa-solid fa-ellipsis-vertical text-[#080808]/60"></i></div>
                            <ul tabindex="0"
                                class="dropdown-content menu bg-base-100 rounded-box z-1 w-32 p-2 shadow-sm">
                                <li><a>View Details</a></li>
                                <li class="text-red-600"><a>Delete</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
`;
    historySection.appendChild(element);
   }
});



/* add money */
addMoneyBtn.addEventListener("click", function(event){
    event.preventDefault();
    if(!userAuth('bank-account-number', 'user-pin')) return;

    let amount = getIntValue('money-amount');
    let balance = getBalance();
    if(amount>0 && amount<=balance){
    amount += balance;
    userBalance.innerText = amount;
    resetValue(['money-amount', 'bank-account-number', 'user-pin']);
    transactionHistory.push(getTransaction('Add Money'));
    } else {
        alert("Given amount is not valid");
    }
});

/* cashout money */
withdrawBtn.addEventListener("click", function(event){
    event.preventDefault();

    if(!userAuth('agent-number', 'cashout-user-pin')) return;

    let amount = getIntValue('cashout-amount');;
    let balance = getBalance();
    if(amount>0 && amount<=balance){
    amount = balance - amount;
    userBalance.innerText = amount;
    resetValue(['agent-number', 'cashout-user-pin', 'cashout-amount']);
    transactionHistory.push(getTransaction('Withdraw'));
    } else {
        alert("Given amount is not valid");
    }
});

/* transfer money */

transferSendBtn.addEventListener("click", function(event){
    event.preventDefault();

    if(!userAuth('transfer-account-number', 'transfer-user-pin')) return;

    let amount = getIntValue('transfer-amount');;
    let balance = getBalance();
    if(amount>0 && amount<=balance){
    amount = balance - amount;
    userBalance.innerText = amount;
    resetValue(['transfer-account-number', 'transfer-user-pin', 'transfer-amount']);
    transactionHistory.push(getTransaction('Transfer'));
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
    let balance = getBalance();
    if(amount>0 && amount<=balance){
    amount = balance - amount;
    userBalance.innerText = amount;
    resetValue(['user-pay-bill-selected-bank', 'pay-bill-bank-account-number', 'pay-bill-user-pin', 'pay-bill-money-amount']);
    transactionHistory.push(getTransaction('Pay Bill'));
    console.log(transactionHistory);
    } else {
        alert("Given amount is not valid");
    }
});


/* end event listener part */
