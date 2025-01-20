import {GameStatuses} from "./GAME_STATUSES.js";

export class Game {
    #settings = {
        gridSize: {
            columnsCount: 4,
            rowsCount: 4
        }
    }
    #gameStatus = GameStatuses.PENDING
    #googlePosition = {
        x:0,y:0
    }
    set status(status) {
        this.#gameStatus = status
    }
    get status() {
        return this.#gameStatus
    }
    get gridSize() {
        return this.#settings.gridSize
    }
    get googlePosition() {
        return this.#googlePosition
    }
    start() {
        this.#googlePosition={
            x:0,y:0
        }
        this.#gameStatus = GameStatuses.IN_PROGRESS
    }

    win() {
        this.#gameStatus = GameStatuses.WIN
    }


}

// const game = new Game()
// console.log(game.status)
// module.exports = {
//     Game,
// }
