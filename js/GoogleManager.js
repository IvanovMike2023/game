import {Position} from "./Position.js";
import {SamuraiNumberUtility} from "./samurai-number-utility.js";

export  class GoogleManager {
    constructor(numberUtility) {
        this.position=new Position(0,0)
        this.numberUtility= numberUtility
    }
    #jumpGoogle() {
        const newPosition = new Position(
            this.numberUtility.getRandomInteger(0, this.#settings.gridSize.rowsCount),
            this.numberUtility.getRandomInteger(0, this.#settings.gridSize.columnsCount)
        )
        if (
            newPosition.equals(this.googlePosition) ||
            newPosition.equals(this.player1Position) ||
            newPosition.equals(this.player2Position)
        ) {
            this.#jumpGoogle()
            return
        }
        this.#googlePosition = newPosition
    }
}