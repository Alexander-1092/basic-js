const { NotImplementedError } = require('../extensions/index.js');

/**
 * The MAC-48 address is six groups of two hexadecimal digits (0 to 9 or A to F),
 * separated by hyphens.
 *
 * Your task is to check by given string inputString
 * whether it's a MAC-48 address or not.
 *
 * @param {Number} inputString
 * @return {Boolean}
 *
 * @example
 * For 00-1B-63-84-45-E6, the output should be true.
 *
 */
function isMAC48Address(n) {
	let newArr = n.split('-')
	let flag = true
	if(newArr.length === 6){
		newArr.forEach(element => {
		if(element.length > 2){
			flag = false
		} else{		
			if(isNaN(element[0])){
				if (element[0].charCodeAt(0) > 70){
					flag = false
				}
			}
			if(isNaN(element[1])){
				if (element[0].charCodeAt(0) > 70){
					flag = false
				}
			}
		}
		});
	}  else {
		return false
	}
	return flag
}

module.exports = {
  isMAC48Address
};
