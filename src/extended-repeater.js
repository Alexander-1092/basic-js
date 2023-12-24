const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
	let newStr = ''

	if(options.repeatTimes !== undefined){

		for (let index = 0; index < options.repeatTimes; index++) {
			newStr += String(str);
	
			if(options.additionRepeatTimes !== undefined){
				
				for (let j = 0; j < options.additionRepeatTimes; j++) {
					newStr += options.addition
					if (j !== options.additionRepeatTimes - 1){
						if(options.additionSeparator !== undefined){
							newStr += options.additionSeparator
						}	else if (options.additionSeparator === undefined) {
							newStr += '|'
						}
					}
				}
			} else if (options.addition !== undefined) {
				newStr += options.addition
			}
	
			if (options.repeatTimes !== undefined){
				if(index !== options.repeatTimes - 1 && options.separator !== undefined){
					newStr += options.separator;
				}else if(options.repeatTimes > 1 && index !== options.repeatTimes - 1){
					newStr += '+'
				}
			}
		}

	} else {

		for (let index = 0; index < 1; index++) {
			newStr += str;
	
			if(options.additionRepeatTimes !== undefined){
	
				for (let j = 0; j < options.additionRepeatTimes; j++) {
					newStr += options.addition
					if (j !== options.additionRepeatTimes - 1){
						if(options.additionSeparator !== undefined){
							newStr += options.additionSeparator
						}	else if (options.additionSeparator === undefined) {
							newStr += '|'
						}
					}
				}
			} 
			if(options.additionRepeatTimes === undefined){
	
				for (let j = 0; j < 1; j++) {
					newStr += options.addition
					if (j !== options.additionRepeatTimes - 1){
						if(options.additionSeparator !== undefined && options.additionRepeatTimes !== undefined){
							newStr += options.additionSeparator
						}	else if (options.additionSeparator === undefined) {
							newStr += '|'
						}
					}
				}
			} 

	
			if (options.repeatTimes !== undefined){
	
				if(index !== options.repeatTimes - 1 && options.separator !== undefined){
					newStr += options.separator;
				}else if(options.repeatTimes > 1 && index !== options.repeatTimes - 1){
					newStr += '+'
				}
			}
		}

	}



	return newStr
}


module.exports = {
  repeater
};
