let card1 = {
  number: 55322,
  bank: "My bank",
  name: "Вася",
  surname: "Васин",
  code: 3333,
  account: 2000,
};

let card2 = {
  number: 55323,
  bank: "My bank",
  name: "Петя",
  surname: "Петин",
  code: 2222,
  account: 200,
};

let card3 = {
  number: 55323,
  bank: "My bank",
  name: "Петя",
  surname: "Васин",
  code: 1111,
  account: 2000,
};

let bank = [card1, card2];
let cashMashine3 = {
  number: 3,
  showBalance: function (card) {
    console.log(card.account);
  },

  getMoney: function (card, code, sum) {
    if (
      this.checkAccount(card, code) == true &&
      this.checkBankAccount(card, code) == true
    ) {
      this.showBalance(card);
      console.log(sum);
      card.account -= sum;
      console.log(card.account);
    } else {
      alert("error");
    }
  },
  giveMoney: function (card, code, sum) {
    if (
      this.checkAccount(card, code) == true &&
      this.checkBankAccount(card, code) == true
    ) {
      this.showBalance(card);
      console.log(sum);
      card.account = +card.account + +sum;
      console.log(card.account);
    } else {
      alert("error");
    }
  },

  checkAccount: function (card, code) {
    if (card.code == code) {
      return true;
    } else {
      return false;
    }
  },
  checkBankAccount: function (card, code) {
    for (let i = 0; i < bank.length; i++) {
      let verify = true;
      for (const key in bank[i]) {
        const element1 = bank[i][key];
        console.log(element1);

        if (bank[i][key] !== card[key]) {
          break;
        }
      }
      if (verify) return true;
    }
    return false;
  },
};

let cashMashine1 = {
  number: 1,
  showBalance: function (card) {
    console.log(card.account);
  },

  getMoney: function (card, code, sum) {
    if (
      this.checkAccount(card, code) == true &&
      this.checkBankAccount(card, code) == true
    ) {
      this.showBalance(card);
      console.log(sum);
      card.account -= sum;
      console.log(card.account);
    } else {
      alert("error");
    }
  },
  giveMoney: function (card, code, sum) {
    if (
      this.checkAccount(card, code) == true &&
      this.checkBankAccount(card, code) == true
    ) {
      this.showBalance(card);
      console.log(sum);
      card.account = +card.account + +sum;
      console.log(card.account);
    } else {
      alert("error");
    }
  },

  checkAccount: function (card, code) {
    if (card.code == code) {
      return true;
    } else {
      return false;
    }
  },
  checkBankAccount: function (card, code) {
    for (let i = 0; i < bank.length; i++) {
      let verify = true;
      for (const key in bank[i]) {
        const element1 = bank[i][key];
        console.log(element1);

        if (bank[i][key] !== card[key]) {
          break;
        }
      }
      if (verify) return true;
    }
    return false;
  },
};

// function cashMashine1() {
//   cashMashine3.apply(this, arguments);
// }
// cashMashine1.prototype = Object.create(cashMashine3.prototype);
// cashMashine1.prototype.constructor = cashMashine1;

// let CashMashine1 = new cashMashine1();
