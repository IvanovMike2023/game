import {GameStatuses} from "./GAME_STATUSES.js";
import {SamuraiNumberUtility} from "./samurai-number-utility.js";
import {Position} from "./Position.js";

export class Game {
    #settings = {
        gridSize: {
            columnsCount: 4,
            rowsCount: 4
        },
        jumpGoogleInterval: 0
    }
    #gameStatus = GameStatuses.PENDING
    #googlePosition = null
    #player1Position= null
    #player2Position
    /**
     * @type SamuraiNumberUtility
     */

    #numberUtility

    constructor() {
        this.#numberUtility = new SamuraiNumberUtility
    }

    set jumpGoogleInterval(value) {
        if (!Number.isInteger(value) || value < 0) {
            throw new Error('Parameter is not a number!');
        }
        this.#settings.jumpGoogleInterval = value
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
    get player1Position() {
        return this.#player1Position
    }

    start() {
        this.#jumpGoogle()
        this.#player1StartPosition()
        this.#gameStatus = GameStatuses.IN_PROGRESS
        setInterval(() => {
            this.#jumpGoogle()
        }, this.#settings.jumpGoogleInterval)

    }

    #jumpGoogle() {

        const newPosition = new Position(
            this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.rowsCount),
            this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.columnsCount)
        )
        if (newPosition.x === this.googlePosition?.x && newPosition.y === this.googlePosition?.y) {
            this.#jumpGoogle()
            return
        }
        this.#googlePosition = newPosition
    }


    win() {
        this.#gameStatus = GameStatuses.WIN
    }



    #player1StartPosition() {
        this.#player1Position = new Position(
            this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.rowsCount),
            this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.columnsCount)
        )
    }

    #player2StartPosition() {
        let position
        do {
            position = new Position(this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.rowsCount),
                this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.columnsCount))
        } while (position.equals(this.#player1Position))
        this.#player2Position = position
    }
}

// const game = new Game()
// console.log(game.status)
// module.exports = {
//     Game,
// }
