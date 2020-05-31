var balance = 0
function deposit(amount) {
    balance+=amount
}
function withdraw(amount) {
    balance-=amount    
}
function balance_amount() {
    console.log(balance);
    
}
deposit(15000) 
withdraw(1000)
balance_amount()
