import {Game} from "./js/game.js";
import {MoveDirections} from "./js/move-directions.js";
import {SamuraiNumberUtility} from "./js/samurai-number-utility.js";

describe('game', () => {

    it('get status', () => {
        const numberUtility = new SamuraiNumberUtility
        const game = new Game(numberUtility)
        expect(game.status).toBe('pending')
    })
    it('set status', () => {
        const numberUtility = new SamuraiNumberUtility
        const game = new Game(numberUtility)
        game.status = 'in_progress'
        expect(game.status).toBe('in_progress')
    })
    it('should have InProgress status after start', () => {
        const numberUtility = new SamuraiNumberUtility
        const game = new Game(numberUtility)
        game.start()
        expect(game.status).toBe('in_progress')
    })
    it('should have Win status after start', () => {
        const numberUtility = new SamuraiNumberUtility
        const game = new Game(numberUtility)
        game.start()
        game.win()
        expect(game.status).toBe('win')
    })
    it('Position Google should be in the Grid after start', () => {
        const numberUtility = new SamuraiNumberUtility
        const game = new Game(numberUtility)
        game.start()
        // console.log(game.player1Position)
        expect(game.googlePosition.x).toBeLessThan(game.gridSize.columnsCount)
        expect(game.googlePosition.x).toBeGreaterThanOrEqual(0)
        expect(game.googlePosition.y).toBeLessThan(game.gridSize.rowsCount)
        expect(game.googlePosition.y).toBeGreaterThanOrEqual(0)
    })
    it('Google should be in the Grid but in new position after jump', async () => {
        const numberUtility = new SamuraiNumberUtility
        const game = new Game(numberUtility)
        game.jumpGoogleInterval = 1
        game.start()
        //game.player1Position()
        for (let i = 0; i < 100; i++) {
            const prevgooglePosition = game.googlePosition

            await delay(1)
            const currentgooglePosition = game.googlePosition
            expect(prevgooglePosition).not.toBe(currentgooglePosition)
        }
    })

    it('player2Position', () => {
        const numberUtility = new SamuraiNumberUtility
        const game = new Game(numberUtility)
        game.jumpGoogleInterval = 1
        game.start()
        const prevgoog = game.player1Position
        const prevgoog2 = game.player2Position
        expect(prevgoog.equals(prevgoog2)).toBe(false)

    })

    it('player1Position should move in correct directions', () => {

        const numberUtilityMock = {
            _count: 0, returnValues: [3, 3, 2, 3],

            getRandomInteger() {
                const returnValue = this.returnValues[this._count]
                if (returnValue === undefined) {
                    throw new Error('23232')
                }
                this._count++
                return returnValue
            }
        }
        const game = new Game(numberUtilityMock)
        game.start()
        //[][][][]
        //[][][][]
        //[][][][]
        //[][][][x]

//[][][][]
//[][][][]
//[][][][x]
//[][][][]
        game.movePlayer(1, MoveDirections.UP)
        expect(game.player1Position.y).toEqual(2)


//[][][][]
//[][][][]
//[][][x][]
//[][][][]
        game.movePlayer(1, MoveDirections.LEFT)
        expect(game.player1Position.x).toEqual(2)
//[][][][]
//[][][][]
//[][][][x]
//[][][][]
        game.movePlayer(1, MoveDirections.RIGHT)
        expect(game.player1Position.x).toEqual(3)
//[][][][]
//[][][][]
//[][][][]
//[][][][x]
        game.movePlayer(1, MoveDirections.DOWN)
        expect(game.player1Position.y).toEqual(3)

        game.movePlayer(2, MoveDirections.UP)
        expect(game.player2Position.y).toEqual(2)

        game.movePlayer(2, MoveDirections.DOWN)
        expect(game.player2Position.y).toEqual(3)

        game.movePlayer(2, MoveDirections.LEFT)
        expect(game.player2Position.x).toEqual(1)

        game.movePlayer(2, MoveDirections.RIGHT)
        expect(game.player2Position.x).toEqual(2)

    })
});

const delay = (ms) => new Promise(res => setTimeout(res, ms))
