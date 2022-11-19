/* zero or more characters except '\n' */
let re = /.*/i;
console.log("Regular expression: /.*/");
console.log('Test string: qwerty123!!: Result: '+ re.test('qwerty123!!'));
console.log('Test string: : Result: '+ re.test(''));
console.log('---------------------------------------');

/* one or more characters except '\n' */
re = /.+/i;
console.log("Regular expression: /.+/");
console.log('Test string: qwerty123!!: Result: '+ re.test('qwerty123!!'));
console.log('Test string: : Result: '+ re.test(''));
console.log('---------------------------------------');

/* a followed by zero or more characters */
re = /a.*/i;
console.log("Regular expression: /a.*/i");
console.log('Test string: a: Result: '+ re.test('a'));
console.log('Test string: a5: Result: '+ re.test('a5'));
console.log('---------------------------------------');

/* a followed by one or more characters */
re = /a.+/i;
console.log("Regular expression: /a.+/i");
console.log('Test string: a: Result: '+ re.test('a'));
console.log('Test string: a5: Result: '+ re.test('a5'));
console.log('Test string: arm5: Result: '+ re.test('arm5'));
console.log('---------------------------------------');

/* the pattern abc */
re = /abc/i;
console.log("Regular expression: /abc/");
console.log('Test string: abc: Result: '+ re.test('abc'));
console.log('Test string: ac: Result: '+ re.test('ac'));
console.log('Test string: abbc: Result: '+ re.test('abbc'));
console.log('Test string: aaaabbb: Result: '+ re.test('aaaabbb'));
console.log('---------------------------------------');

/* the pattern has a followed by zero or more 'b's followed by a c */
re = /ab*c/i;
console.log("Regular expression: /ab*c/");
console.log('Test string: abc: Result: '+ re.test('abc'));
console.log('Test string: ac: Result: '+ re.test('ac'));
console.log('Test string: abbc: Result: '+ re.test('abbc'));
console.log('Test string: aaaabbb: Result: '+ re.test('aaaabbb'));
console.log('---------------------------------------');

