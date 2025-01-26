export class Settings{
    // #settings = {
    //     gridSize: {
    //         columnsCount: 4,
    //         rowsCount: 4
    //     },
    //     jumpGoogleInterval: 0
    // }
    #gridSize
    #jumpGoogleInterval
    constructor(gridsize,jumpGoogleInterval) {
        this.#gridSize=gridsize
        this.#jumpGoogleInterval=jumpGoogleInterval
    }
    get gridSize() {
        return this.#gridSize
    }
    get jumpGoogleInterval() {
        return this.#jumpGoogleInterval
    }
}