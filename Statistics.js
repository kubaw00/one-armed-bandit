class Statistics {
    constructor() {
        this.gameResult = [];

    }

    addGameToStatistics(win, bid) {
        let addGame = {
            win: win,
            bid: bid
        }
        this.gameResult.push(addGame)
    }

    showGameStatistics() {
        let games = this.gameResult.length
        let wins = this.gameResult.filter(result => result.win).length;
        let losses = this.gameResult.filter(result => !result.win).length;
        return [games, wins, losses]
    }
}

const stats = new Statistics();