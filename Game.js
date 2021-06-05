// link do gry: https://websamuraj.pl/examples/js/gra/ 

class Game {
    constructor(funds) {
        this.walletMoney = new Wallet(funds)
        this.statistics = new Statistics();

        document.querySelector('button').addEventListener('click', this.startGame.bind(this));

        this.spanWallet = document.querySelector('span.wallet');
        this.spanGames = document.querySelector('span.number');
        this.spanWins = document.querySelector('span.win');
        this.spanLosses = document.querySelector('span.loss');
        this.spanResults = document.querySelector('span.result');
        this.inputValue = document.querySelector('.play input');
        this.divColors = document.querySelectorAll('div.color');

        this.render()
    }

    render(wallet = this.walletMoney.getWalletValue(), stats = [0, 0, 0], result = "", wonMoney = 0, bid = 0, colors = ["gray", "gray", "gray"]) {
        this.spanWallet.textContent = wallet;
        this.spanGames.textContent = stats[0];
        this.spanWins.textContent = stats[1];
        this.spanLosses.textContent = stats[2];
        if (result) {
            result = `Wygrałeś ${wonMoney}`;
        } else if (!result && result !== "") {
            result = `Przegrałeś ${bid}`
        }
        this.spanResults.textContent = result;

        this.divColors.forEach((color, i) => {
            color.style.backgroundColor = colors[i];
        })
        this.inputValue.value = "";
    }

    startGame() {
        if (this.inputValue.value < 1) return alert("Podana liczba jest zamała, podaj liczbę większą lub równą jeden");
        const bid = Math.floor(this.inputValue.value);
        if (!this.walletMoney.checkCanPlay(bid)) {
            return alert("Zbyt duży zakład")
        }
        this.walletMoney.changeWallet(bid, "-");
        this.draw = new Draw();
        const colors = this.draw.getDrawResult();
        const win = Result.checkWinner(colors);
        const wonMoney = Result.moneyWinInGame(win, bid);
        this.walletMoney.changeWallet(wonMoney);
        this.statistics.addGameToStatistics(win, bid)
        this.statistics.showGameStatistics()

        this.render(this.walletMoney.getWalletValue(), this.statistics.showGameStatistics(), win, wonMoney, bid, colors)
    }
}