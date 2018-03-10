/*
 * Programming Quiz: Bank Accounts 1 (7-3)
 */

var savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
        if (amount > 0) {
            savingsAccount.balance += amount;
        }
    },
    withdraw: function removeMoney(amount) {
        var verifyBalance = savingsAccount.balance - amount;
        if (amount > 0 && verifyBalance >= 0) {
            savingsAccount.balance -= amount;
        }
    },
    printAccountSummary() {
        return("Welcome!\nYour balance is currently $"+ savingsAccount.balance + 
        " and your interest rate is " + savingsAccount.interestRatePercent+"%.");
    },
};

savingsAccount.printAccountSummary();

/* 
q. Why did the CoffeeScript developer keep getting lost? 
a. Because he couldn’t find his source without a map
*/
