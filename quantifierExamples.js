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

/* zero or one character except '\n' */
re = /ca?b/i;
console.log("Regular expression: /ca?b/");
console.log('Test string: cb: Result: '+ re.test('cb'));
console.log('Test string: cab : Result: '+ re.test('cab'));
console.log('Test string: caab : Result: '+ re.test('caab'));
console.log('---------------------------------------');

/* c followed by zero to 5 'a's followed by b */
re = /ca{0,5}b/i;
console.log("Regular expression: /a{0,5}/");
console.log('Test string: cb: Result: '+ re.test('cb'));
console.log('Test string: cab : Result: '+ re.test('cab'));
console.log('Test string: caaaaab : Result: '+ re.test('caaaaab'));
console.log('Test string: caaaaaab : Result: '+ re.test('caaaaaab'));
console.log('---------------------------------------');

/* c followed by atleast 2 'a's followed by b */
re = /ca{2,}b/i;
console.log("Regular expression: /ca{2,}b/");
console.log('Test string: cb: Result: '+ re.test('cb'));
console.log('Test string: cab : Result: '+ re.test('cab'));
console.log('Test string: caab : Result: '+ re.test('caab'));
console.log('Test string: caaab : Result: '+ re.test('caaab'));
console.log('---------------------------------------');

/* c followed by exactly 2 'a's followed by b */
re = /ca{2}b/i;
console.log("Regular expression: /ca{2}b/");
console.log('Test string: cb: Result: '+ re.test('cb'));
console.log('Test string: cab : Result: '+ re.test('cab'));
console.log('Test string: caab : Result: '+ re.test('caab'));
console.log('Test string: caaab : Result: '+ re.test('caaab'));
console.log('---------------------------------------');
