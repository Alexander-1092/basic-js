const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
	let bigNum = 0;
	let numArr = String(n).split('');
	let counter = 0
	for (let index = 0; index < numArr.length; index++) {
		let newArr = `${numArr.slice(0, counter)}${numArr.slice(index + 1)}`
		counter += 1
		let rez = Number(newArr.replaceAll(',', ''))
		if(rez > bigNum){bigNum = rez}
	}
	return bigNum
}
		

module.exports = {
  deleteDigit
};
