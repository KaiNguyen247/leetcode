/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {};

class leetcode {
    constructor(digits) {
        this.digits = digits;
    }

    plusOne() {
        for (let i = this.digits.length - 1; i >= 0; i--) {
            if (this.digits[i] < 9) {
                this.digits[i] += 1;
                return this.digits;
            }

            this.digits[i] = 0;
        }

        this.digits.unshift(1);
        //github.com/KaiNguyen247/leetcode.git

        https: return this.digits;
    }
}
