// Modules
// Node uses CommonJS under the hood
const names = require('./4-names');
const sayHi = require('./5-utils');
const alt = require('./6-alternative-export');
const mindGrenade = require('./7-mind-grenade');
console.log('names :>> ', names);

sayHi(names.john)
sayHi(names.jamie)
sayHi(alt.singlePerson.name)

// sayHi('susan')
// sayHi(peter)
// sayHi(john)