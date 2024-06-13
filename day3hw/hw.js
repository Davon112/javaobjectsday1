// Question 1

class Books{
    constructor(title, author, pages){
        this.title = title;
        this.author = author;
        this.pages = pages;
    }

    showBook = () => {
        console.log(`Title: ${this.title} Author: ${this.author} Pages ${this.pages}`)
    };
}


// Question 2

class Account{
    constructor(accountNumber, balance, owner){
        this.accountNumber = accountNumber
        this.balance = balance
        this.owner = owner
    }

    deposit(depositAmount) {
        if (depositAmount <= 0){
            return "Not enough bucko";
        }
        else this.balance += depositAmount;
        return `New Balance: ${this.balance}`;
    }
    
    withdrawal(withdrawalAmount){
        if (withdrawalAmount > this.balance){
            return "You don't got the funds for that";
        }
        else this.balance -= withdrawalAmount;
        return `New Balance: ${this.balance}`;
    }

    compoundInterest(principal, interestRate, years){
        let p = principal
        principal = this.balance
        let r = interestRate / 100;
        let n = 1;
        let t = years;
        let amount = p * (1 + n*r) ** n * t;
        amount = Math.ceil(amount);

        return amount;
    }
    
}