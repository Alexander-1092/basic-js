const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create name of dream team based on the names of its members
 *  
 * @param {Array} members names of the members 
 * @return {String | Boolean} name of the team or false
 * in case of incorrect members
 *
 * @example
 * 
 * createDreamTeam(['Matt', 'Ann', 'Dmitry', 'Max']) => 'ADMM'
 * createDreamTeam(['Olivia', 1111, 'Lily', 'Oscar', true, null]) => 'LOO'
 *
 */
function createDreamTeam (members) {
	if(Array.isArray(members)){
		const onlyStr = members.filter(item => typeof(item) === 'string')
		if (onlyStr.length > 0) {
			const rez = onlyStr.map(item => item.trim().toUpperCase())
			return rez.map(item => item[0]).sort().join('')
		} else {
			return false
		}
	} else {
		return false
	}
}


module.exports = {
  createDreamTeam
};
