import {Game} from "./game.js";

describe('game', ()=>{
        it('should say hello word',()=>{
            const game = new Game()
            expect(game.hello()).toBe('lets start')
        })
});

//cscs