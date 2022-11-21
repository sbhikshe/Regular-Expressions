
/* any single character except newline */
let re = /./i;
console.log("Regular expression: /./");
console.log('Test string: abc: Result: '+ re.test('abc'));
console.log('Test string: 123abc: Result: '+ re.test('123abc'));
console.log('Test string: -@%$#%#$: Result: '+ re.test('-@%$#%#$'));
console.log('Test string: \\t: Result: '+ re.test('\t'));
console.log('Test string: \\n: Result: '+ re.test('\n'));
console.log('---------------------------------------');

/* any single character including newline */
re = /./s;
console.log("Regular expression: /./");
console.log('Test string: abc: Result: '+ re.test('abc\ndef'));
console.log('Test string: \\n: Result: '+ re.test('\n'));
console.log('---------------------------------------');

/* the pattern is a single character - either of a, b, or c */
re = /[abc]/i;
console.log("Regular expression: /[abc]/");
console.log('Test string: abc: Result: '+ re.test('abc'));
console.log('Test string: ac: Result: '+ re.test('ac'));
console.log('Test string: abbc: Result: '+ re.test('abbc'));
console.log('Test string: aaaabbb: Result: '+ re.test('def'));
console.log('---------------------------------------');

/* a single character in character class a-z */
re = /[a-z]/;
console.log("Regular expression: /[a-z]/");
console.log('Test string: abc: Result: '+ re.test('abc'));
console.log('Test string: ABCDE: Result: '+ re.test('ABCDE'));
console.log('Test string: 123243243: Result: '+ re.test('123243243'));
console.log('Test string: #$#$#%: Result: '+ re.test('#$#$#%'));
console.log('---------------------------------------');

/* a single character in character class A-Z */
re = /[A-Z]/;
console.log("Regular expression: /[A-Z]/");
console.log('Test string: abc: Result: '+ re.test('abc'));
console.log('Test string: ABCDE: Result: '+ re.test('ABCDE'));
console.log('---------------------------------------');

/* a single character in character class a-z - case insensitive */
re = /[a-z]/i;
console.log("Regular expression: /[a-z]/");
console.log('Test string: abc: Result: '+ re.test('abc'));
console.log('Test string: ABCDE: Result: '+ re.test('ABCDE'));
console.log('---------------------------------------');

/* a single character in character class 0-9 */
re = /[0-9]/;
console.log("Regular expression: /[0-9]/");
console.log('Test string: 123: Result: '+ re.test('012'));
console.log('Test string: ABCDE: Result: '+ re.test('ABCDE'));
console.log('---------------------------------------');

/* not character a or A */
re = /[^a]/i;
console.log("Regular expression: /[^a]/i");
console.log('Test string: cat: Result: '+ re.test('cat'));
console.log('Test string: abc: Result: '+ re.test('abc'));
console.log('Test string: mouse: Result: '+ re.test('mouse'));

