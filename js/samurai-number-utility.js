export class SamuraiNumberUtility {
    getRandomInteger(fromInclusive, toExclusive) {
        if (fromInclusive >= toExclusive) {
            throw new Error('The "fromInclusive" value must be less than "toExclusive".');
        }
        return Math.floor(Math.random() * (toExclusive - fromInclusive)) + fromInclusive;
    }
}
// Object.prototype.equals = function equals(obcj) {
//     return JSON.stringify(this) === JSON.stringify(obj)
// };