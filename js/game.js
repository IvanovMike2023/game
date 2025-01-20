import {GameStatuses} from "./GAME_STATUSES.js";
import {SamuraiNumberUtility} from "./samurai-number-utility.js";

export class Game {
    #settings = {
        gridSize: {
            columnsCount: 4,
            rowsCount: 4
        }
    }
    #gameStatus = GameStatuses.PENDING
    #googlePosition = null
    /**
     * @type SamuraiNumberUtility
     */

    #numberUtility

    constructor() {
        this.#numberUtility = new SamuraiNumberUtility
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
        this.#jumpGoogle()
        this.#gameStatus = GameStatuses.IN_PROGRESS
        setInterval(() => {
            this.#jumpGoogle()
        }, 1000)

    }

    #jumpGoogle() {
        const newPosition = {
            x: this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.rowsCount),
            y: this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.columnsCount)
        }
        if (newPosition.x === this.googlePosition?.x && newPosition.y === this.googlePosition?.y) {
            this.#jumpGoogle()
            return
        }
        this.#googlePosition=newPosition
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
