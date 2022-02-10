document.getElementById('deposit-button').addEventListener('click', function(){
    //get The Amount deposited
    const depositAmount = document.getElementById('deposit-input').value
    
    // console.log(depositAmount);

    const depositCurrent = document.getElementById('deposit-total')

    console.log(depositCurrent.innerText);
    
    depositCurrent.innerText = parseFloat(depositAmount) + parseFloat(depositCurrent.innerText)
    document.getElementById('deposit-input').value = ''
    // balance update

    const balanceTotal =parseFloat(document.getElementById('balance-total').innerText)
    const newBalance = balanceTotal + parseFloat(depositAmount)
    document.getElementById('balance-total').innerText = newBalance

    //Withdraw
    



})

