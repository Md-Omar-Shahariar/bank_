function getInputValue(inputId){
    const input = document.getElementById(inputId)
    const amountText = input.value
    const amount = parseFloat(amountText)
// clear value
    input.value = ''
    return amount
}
function total(totalFieldId, amount){
    const current = document.getElementById(totalFieldId)
    const currentText = current.innerText
    const previousTotal = parseFloat(currentText)
    current.innerText = amount + previousTotal
}
function updateBalance(amount, isAdd){
    const balanceTotal =parseFloat(document.getElementById('balance-total').innerText)
    if(isAdd == true){
        const newBalance = balanceTotal + amount
        document.getElementById('balance-total').innerText = newBalance
    }
    else{
        const newBalance = balanceTotal - amount
        document.getElementById('balance-total').innerText = newBalance
    }
    
}

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input')
    // balance update
    total('deposit-total' ,depositAmount)
    updateBalance(depositAmount, true)
    

})

// withdraw

document.getElementById('withdraw-button').addEventListener('click', function(){
    
    const withdrawAmount = getInputValue('withdraw-input')
    total('withdraw-total',withdrawAmount)
    // balance update
    updateBalance(withdrawAmount, false)


})

