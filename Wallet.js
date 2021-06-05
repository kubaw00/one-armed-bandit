class Wallet {
    constructor(money) {
        let _money = money;


        this.getWalletValue = () => _money;
        this.checkCanPlay = (value) => {
            if (_money >= value) return true;
            else return false;
        }
        this.changeWallet = (value, type = "+") => {
            if (typeof value === "number" && !isNaN(value)) {
                if (type === "+") {
                    return _money += value
                } else if (type === "-") {
                    return _money -= value
                } else {
                    throw new Error("nieprawidłowy znak")
                }
            } else {
                throw new Error("To nie jest liczba")
            }
        }

        // this.changeWallet = (value, type = "+") => {
        //     if (typeof value === "number" && !isNaN(value)) {
        //         if (_money >= value) {
        //             if (type === "+") {
        //                 return _money += value
        //             } else if (type === "-") {
        //                 return _money -= value
        //             } else {
        //                 throw new Error("nieprawidłowy znak")
        //             }
        //         } else return alert('za duża liczba')
        //     } else {
        //         throw new Error("To nie jest liczba")
        //     }
        // }


    }
}