class YesBank {
  doPayment() {
    console.log("do payment by yes bank");
  }
}

class KotakBank {
  doPayment() {
    console.log("do payment by kotak bank");
  }
}

class PaymentGatewayFactory {
  constructor(bank) {
    this.bank = bank;
  }

  getBank() {
    switch (this.bank) {
      case "yes":
        return new YesBank();
      case "kotak":
        return new KotakBank();
      default:
        return new Error("erro");
    }
  }
}

let paymentgateawayObj = new PaymentGatewayFactory("yes");
let bankObj = paymentgateawayObj.getBank();
bankObj.doPayment();
