const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
	let obj = {}

	for (let index = 0; index < str.length; index++) {
		if(obj[str[index]] === undefined) {
			obj[str[index]] = 1
		} else if(str[index] === str[index + 1] || str[index] === str[index - 1]) {
			obj[str[index]] = obj[str[index]] + 1
		}	else {
			obj[str[index] + ' '] = 0
		}
	}
	let newArr = []
	for (const key in obj) {
		let keyObj = obj[key]
		if(keyObj > 1) {
			newArr.push(obj[key])
		}
		newArr.push(key)
	}
	return newArr.join('').trim()
}



module.exports = {
  encodeLine
};
