function getInputValue(inputId){
    const input = document.getElementById(inputId)
    const amountText = input.value
    const amount = parseFloat(amountText)
    input.value = '' //clear value
    return amount
}

function getCurrentBalance(){
    const balanceTotal =parseFloat(document.getElementById('balance-total').innerText)
    return balanceTotal
}
function total(totalFieldId, amount){
    const current = document.getElementById(totalFieldId)
    const currentText = current.innerText
    const previousTotal = parseFloat(currentText)
    current.innerText = amount + previousTotal
}
function updateBalance(amount, isAdd){
    const balanceTotal = getCurrentBalance()
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
    if(depositAmount > 0){
        total('deposit-total' ,depositAmount)
        updateBalance(depositAmount, true)
    }
    
    

})

// withdraw

document.getElementById('withdraw-button').addEventListener('click', function(){
    
    const withdrawAmount = getInputValue('withdraw-input')
    const currentBalance = getCurrentBalance()
    if(withdrawAmount > 0){
        if( currentBalance >= withdrawAmount){
            total('withdraw-total',withdrawAmount)
            updateBalance(withdrawAmount, false)
        }
        else{
            alert('Insufficient balance')
        }
    }
    


})

