
// Handle Deposit Event Listener 
document.getElementById('deposit-btn').addEventListener('click', function () {
    //Amount Deposited
    const depositInput = document.getElementById('deposit-input');
    const depositAmount = depositInput.value;
    // console.log(depositAmount);

    const depositCurrent = document.getElementById('total-deposit');
    const totalDeposit = parseFloat(depositCurrent.innerText) + parseFloat(depositAmount);
    // depositCurrent.innerText = depositAmount;

    depositCurrent.innerText = totalDeposit;

    //clear deposit input value
    depositInput.value = '';

    //Update account balance
    const totalBalance = document.getElementById('total-balance');
    const updatedTotalBalance = parseFloat(totalBalance.innerText) + parseFloat(depositAmount);
    totalBalance.innerText = updatedTotalBalance;
})

//Handle Withdraw Event Listener
document.getElementById('withdraw-btn').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmount = withdrawInput.value;
    // console.log(withdrawAmount);

    const totalWithdraw = document.getElementById('total-withdraw');
    const totalwithdrawValue = parseFloat(totalWithdraw.innerText) + parseFloat(withdrawAmount);
    console.log(totalwithdrawValue);
    totalWithdraw.innerText = totalwithdrawValue;

    //clear withdraw input value
    withdrawInput.value = '';

    //Update Account Balance
    const totalBalance = document.getElementById('total-balance');
    const updatedTotalBalance = parseFloat(totalBalance.innerText) - parseFloat(withdrawAmount);
    totalBalance.innerText = updatedTotalBalance;

})