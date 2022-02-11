function getInputValue(inputId){
    const input = document.getElementById(inputId)
    const amountText = input.value
    const amount = parseFloat(amountText)
// clear value
    input.value = ''
    return amount

}

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input')

    const depositCurrent = document.getElementById('deposit-total')
    
    depositCurrent.innerText = depositAmount + parseFloat(depositCurrent.innerText)
    // balance update

    const balanceTotal =parseFloat(document.getElementById('balance-total').innerText)
    const newBalance = balanceTotal + parseFloat(depositAmount)
    document.getElementById('balance-total').innerText = newBalance

})

// withdraw

document.getElementById('withdraw-button').addEventListener('click', function(){
    
    const withdrawAmount = getInputValue('withdraw-input')

    const withdrawCurrent = parseFloat(document.getElementById('withdraw-total').innerText)   
    document.getElementById('withdraw-total').innerText = withdrawAmount + withdrawCurrent
    // balance update
    const balanceTotal =parseFloat(document.getElementById('balance-total').innerText)
    const newBalance = balanceTotal - withdrawAmount
    document.getElementById('balance-total').innerText = newBalance


})

