import {GameStatuses} from "./GAME_STATUSES.js";
import {SamuraiNumberUtility} from "./samurai-number-utility.js";
import {Position} from "./Position.js";
import {GoogleManager} from "./GoogleManager.js";
import {MoveDirections} from "./move-directions.js";

export class Game {
    #settings = {
        gridSize: {
            columnsCount: 4,
            rowsCount: 4
        },
        jumpGoogleInterval: 0
    }
    #gameStatus = GameStatuses.PENDING
    #googlePosition
    #player1Position
    #player2Position
    // #playerPositions = {
    //     '1': null,
    //     '2': null
    // }
    /**
     * @type SamuraiNumberUtility
     */

    #numberUtility

    constructor() {
        this.#numberUtility = new SamuraiNumberUtility()
      this.GoogleManager = new GoogleManager(this.#numberUtility, this.#settings.gridSize, this.#googlePosition)
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
        return this.GoogleManager.position
    }

    get player1Position() {
        return this.#player1Position
    }

    get player2Position() {
        return this.#player2Position
    }

    start() {
        this.GoogleManager.jumpGoogle(this.player1Position, this.player2Position)
        this.#player1StartPosition()
        this.#player2StartPosition()
        this.#gameStatus = GameStatuses.IN_PROGRESS
        setInterval(() => {
            this.GoogleManager.jumpGoogle(this.player1Position, this.player2Position)
        }, this.#settings.jumpGoogleInterval)

    }

    win() {
        this.#gameStatus = GameStatuses.WIN
    }


    #player1StartPosition() {
        this.#player1Position = new Position(
            this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.rowsCount),
            this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.columnsCount)
        )
       // this.#playerPositions['1'] = this.#player1Position
    }

    #player2StartPosition() {
        let position
        do {
            position = new Position(
                this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.rowsCount),
                this.#numberUtility.getRandomInteger(0, this.#settings.gridSize.columnsCount))
        } while (position.equals(this.#player1Position))
        this.#player2Position = position
       // this.#playerPositions['2'] = position
    }

    movePlayer(playerNumber, moveDirection) {
        switch (moveDirection) {
            case MoveDirections.UP:
                this.#player1Position= new Position(this.#numberUtility.getRandomInteger(),  2)//new Position(this.player1Position.x,this.player1Position.y=this.player1Position.y-1)

        }
    }

}

