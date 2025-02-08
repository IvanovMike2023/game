import {Game} from "./js/game.js";
import {MoveDirections} from "./js/move-directions.js";
import {SamuraiNumberUtility} from "./js/samurai-number-utility.js";

describe('game', () => {

    it('get status', () => {
        const game = new Game()
        expect(game.status).toBe('pending')
    })
    it('set status', () => {
        const game = new Game()
        game.status = 'in_progress'
        expect(game.status).toBe('in_progress')
    })
    it('should have InProgress status after start', () => {
        const game = new Game()
        game.start()
        expect(game.status).toBe('in_progress')
    })
    it('should have Win status after start', () => {
        const game = new Game()
        game.start()
        game.win()
        expect(game.status).toBe('win')
    })
    it('Position Google should be in the Grid after start', () => {
        const game = new Game()
        game.start()
        // console.log(game.player1Position)
        expect(game.googlePosition.x).toBeLessThan(game.gridSize.columnsCount)
        expect(game.googlePosition.x).toBeGreaterThanOrEqual(0)
        expect(game.googlePosition.y).toBeLessThan(game.gridSize.rowsCount)
        expect(game.googlePosition.y).toBeGreaterThanOrEqual(0)
    })
    it('Google should be in the Grid but in new position after jump', async () => {
        const game = new Game()
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
            _count:0,
            returnValues: [2, 2, 3, 0],
            getRandomInteger() {
                const returnValue=this.returnValues[this._count]
                if(returnValue===undefined){
                  throw new Error('23232')
                }

                this._count++
                return returnValue

            }
        }
        const game = new Game(numberUtilityMock)
        game.start()

//???
//[][][][]
//[][][][]
//[][][][]
//[][][][x]
       game.movePlayer(1,MoveDirections.UP)
       const nee= game.player1Position
        expect(game.player1Position).toEqual({x: 3, y: 2})
        //expect(game.player1Position.x).toBeLessThan(4)


    })
});

const delay = (ms) => new Promise(res => setTimeout(res, ms))
