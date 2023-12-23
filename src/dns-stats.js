const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
	const arrReverse = []
	domains.forEach(element => {
		arrReverse.push(element.split('.').reverse())
	});

	const totallArrDomains = []
	for (let i = 0; i < arrReverse.length; i++) {
		for (let j = 0; j < arrReverse[i].length; j++) {
			if(arrReverse[i][j] === 'ru' || arrReverse[i][j] === 'com'){
				totallArrDomains.push('.' + arrReverse[i][j])
			}else {
				if(totallArrDomains[j - 1] === undefined){
					totallArrDomains.push(arrReverse[i][j])
				} else {
					totallArrDomains.push(totallArrDomains[j - 1] + '.' + arrReverse[i][j])
				}	
			}
		}
	}

	const objDomains = {}
	totallArrDomains.forEach(element => {
		if(!objDomains[element]){
			objDomains[element] = 1
		} else {
			objDomains[element] = objDomains[element] + 1
		}
	});

	return objDomains
}


module.exports = {
  getDNSStats
};
