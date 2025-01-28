import {Position} from "./Position.js";
import {SamuraiNumberUtility} from "./samurai-number-utility.js";
import {Settings} from "./Setting.js";

export class GoogleManager {
    constructor(numberUtility,gridSize,googlePosition) {
        this.position = googlePosition//new Position(0, 0)
        this.numberUtility = numberUtility
        this.gridSize = gridSize
    }


    jumpGoogle(player1Position,player2Position) {
        const newPosition = new Position(
            this.numberUtility.getRandomInteger(0, this.gridSize.columnsCount),
            this.numberUtility.getRandomInteger(0, this.gridSize.rowsCount)
        )
        if (
            newPosition.equals(this.position) ||
            newPosition.equals(player1Position) ||
            newPosition.equals(player2Position)
        ) {
            this.jumpGoogle()
            return
        }
        this.position = newPosition
    }

}