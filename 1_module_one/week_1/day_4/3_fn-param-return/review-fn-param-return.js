
var bankAccount = {
    owner: "Mr Majdi",
    banker: "Mr Gui",
    balance: 1,
    isLoggedIn: false,
    getBalance: function() {
        if (isLoggedIn) return this.balance;
    },
    setBalance: function(money) {
        this.balance += money
    }
}

console.log(bankAccount);
bankAccount.isLoggedIn = true;
console.log(bankAccount.getBalance());
bankAccount.setBalance(10000);
console.log(bankAccount.getBalance());