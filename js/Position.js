export class Position {

    #x
    #y

    constructor(x, y) {
        this.#x = x
        this.#y = y
    }

    get x(){
        return this.#x
    }
    get y(){
        return this.#y
    }
    equals(position) {
        return this.#x === position?.x && this.#y === position?.y
    }
}