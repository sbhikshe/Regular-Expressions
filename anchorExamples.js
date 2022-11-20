
/* caret ^ - anchor at the beginning of the string */
let re = /^abc/i;
console.log("Regular expression: /^abc/");
console.log('Test string: abcdef: Result: '+ re.test('abcdef'));
console.log('Test string: pabcqr: Result: '+ re.test('pabcqr'));
console.log('Test string: apqr: Result: '+ re.test('apqr'));
console.log('---------------------------------------');

/* dollar $ - anchor at the end of the string */
re = /abc$/i;
console.log("Regular expression: /abc$/");
console.log('Test string: abcdef: Result: '+ re.test('abcdef'));
console.log('Test string: pabc: Result: '+ re.test('pabc'));
console.log('Test string: abcr: Result: '+ re.test('abcr'));
console.log('Test string: pc: Result: '+ re.test('pc'));
console.log('---------------------------------------');

/* \b - on a word boundary at the beginning */
re = /\ball/i;
console.log("Regular expression: /\\ball/");
console.log('Test string: ball: Result: '+ re.test('ball'));
console.log('Test string: ally: Result: '+ re.test('ally'));
console.log('Test string: wallet: Result: '+ re.test('wallet'));
console.log('---------------------------------------');

/* \b - on a word boundary at the end */
re = /all\b/i;
console.log("Regular expression: /all\\b/");
console.log('Test string: ball: Result: '+ re.test('ball'));
console.log('Test string: ally: Result: '+ re.test('ally'));
console.log('Test string: wallet: Result: '+ re.test('wallet'));
console.log('---------------------------------------');

/* \b - on a word boundary at the beginning and end */
re = /\barm\b/i;
console.log("Regular expression: /\\barm\\b/");
console.log('Test string: harm: Result: '+ re.test('parm'));
console.log('Test string: armor: Result: '+ re.test('armor'));
console.log('Test string: farmer: Result: '+ re.test('farmer'));
console.log('Test string: arm: Result: '+ re.test('arm'));
console.log('---------------------------------------');

/* \B - not on a word boundary */
re = /\Barm\B/i;
console.log("Regular expression: /\\Barm\\B/");
console.log('Test string: harm: Result: '+ re.test('parm'));
console.log('Test string: armor: Result: '+ re.test('armor'));
console.log('Test string: farmer: Result: '+ re.test('farmer'));
console.log('Test string: arm: Result: '+ re.test('arm'));
console.log('---------------------------------------');
