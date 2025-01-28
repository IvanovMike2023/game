export class Settings{
    #gridSize
    #jumpGoogleInterval
    constructor(gridSize,jumpGoogleInterval) {
        this.#gridSize=gridSize
        this.#jumpGoogleInterval=jumpGoogleInterval
    }
    get gridSize(){
        return this.#gridSize
    }
}