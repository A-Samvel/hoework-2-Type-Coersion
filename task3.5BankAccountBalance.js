// Task 3.5 Bank Account Balance

const bankAccount = {
  balance: 1000,
  interestRate: "5%",
};

bankAccount.valueOf = function () {
  let percent =
    (bankAccount.balance * parseInt(bankAccount.interestRate)) / 100;
  return bankAccount.balance + percent;
};

console.log(+bankAccount);