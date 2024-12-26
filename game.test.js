import {Game} from "./js/game.js";

describe('game', () => {

    it('get status', () => {
        const game = new Game()
        expect(game.status).toBe('pending')
    })
    it('set status', () => {
        const game = new Game()
        game.status='in_progress'
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
    it('Position Google should be gridSize', () => {
        const game = new Game()
        //game.start()
        expect(game.googlePosition.x).toBeLessThan(game.gridSize.columnsCount)
        expect(game.googlePosition.x).toBeGreaterThanOrEqual(0)
        expect(game.googlePosition.y).toBeLessThan(game.gridSize.rowsCount)
        expect(game.googlePosition.y).toBeGreaterThanOrEqual(0)
    })
    // it('init test', () => {
    //     const game = new Game()
    //     game.setSettings({
    //         gridSize: {
    //             x: 4,
    //             y: 5,
    //         },
    //     })
    //
    //     const settings = game.getSettings()
    //
    //     expect(settings.gridSize.x).toBe(4)
    //     expect(settings.gridSize.y).toBe(5)
    // })
});

//cscs