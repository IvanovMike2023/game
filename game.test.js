import {Game} from "./js/game.js";

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
        expect(game.googlePosition.x).toBeLessThan(game.gridSize.columnsCount)
        expect(game.googlePosition.x).toBeGreaterThanOrEqual(0)
        expect(game.googlePosition.y).toBeLessThan(game.gridSize.rowsCount)
        expect(game.googlePosition.y).toBeGreaterThanOrEqual(0)
    })
    it('Google should be in the Grid but in new position after jump', async () => {
        const game = new Game()
        game.jumpGoogleInterval = 1
        game.start()
        debugger
       //game.player1Position()
        for (let i = 0; i < 100; i++) {
            const prevgooglePosition = game.googlePosition

            await delay(1)
            const currentgooglePosition = game.googlePosition
            expect(prevgooglePosition).not.toBe(currentgooglePosition)
        }
    })

    it('player1Position', () => {
        const game = new Game()
        game.jumpGoogleInterval = 1
        game.start()
        const prevgoog = game.player1Position
        console.log(prevgoog)
        // const e={x:1,y:2}
        // console.log(e.equals({x:1,y:2}))
        expect(prevgoog).toBe(game.player1Position)

    })
});
// const delay=(ms)=>{
//     return new Promise(res=>{
//         setTimeout(()=>res(),ms)
//     })
// }

const delay = (ms) => new Promise(res => setTimeout(res, ms))
//cscs