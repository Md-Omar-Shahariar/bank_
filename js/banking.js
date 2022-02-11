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

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositAmount = getInputValue('deposit-input')

    /* const depositCurrent = document.getElementById('deposit-total')
    
    depositCurrent.innerText = depositAmount + parseFloat(depositCurrent.innerText) */
    // balance update
    total('deposit-total' ,depositAmount)

    const balanceTotal =parseFloat(document.getElementById('balance-total').innerText)
    const newBalance = balanceTotal + parseFloat(depositAmount)
    document.getElementById('balance-total').innerText = newBalance

})

// withdraw

document.getElementById('withdraw-button').addEventListener('click', function(){
    
    const withdrawAmount = getInputValue('withdraw-input')

    total('withdraw-total',withdrawAmount)
    // balance update
    const balanceTotal =parseFloat(document.getElementById('balance-total').innerText)
    const newBalance = balanceTotal - withdrawAmount
    document.getElementById('balance-total').innerText = newBalance


})

