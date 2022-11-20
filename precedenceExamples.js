/* alterntates - OR : abc or def */
re = /abc|def/i;
console.log("Regular expression: /abc|def/");
console.log('Test string: qwerty123!!: Result: '+ re.test('qwerty123!!'));
console.log('Test string: pabcqr: Result: '+ re.test('pabcqr'));
console.log('Test string: gggdef: Result: '+ re.test('gggdef'));
console.log('---------------------------------------');

/* Parentheses, *, OR */
/* apply * before OR - either a single a or zero or more of b */
re = /a|b*/i;
console.log("Regular expression: /a|b*/i");
console.log('Test string: : Result: '+ re.test(''));
console.log('Test string: a: Result: '+ re.test('a'));
console.log('Test string: b: Result: '+ re.test('b'));
console.log('Test string: bbb: Result: '+ re.test('bbb'));
console.log('Test string: aa: Result: '+ re.test('aa'));

/* parentheses first, then * - zero or more of a or b */
re = /(a|b)*/i;
console.log("Regular expression: /(a|b)*/i");
console.log('Test string: : Result: '+ re.test(''));
console.log('Test string: a: Result: '+ re.test('a'));
console.log('Test string: b: Result: '+ re.test('b'));
console.log('Test string: bbb: Result: '+ re.test('bbb'));
console.log('Test string: aa: Result: '+ re.test('aa'));
console.log('Test string: aabb: Result: '+ re.test('aabb'));

/* Precedence */
/* Parentheses, 
  Quantifiers (* + ? [m,n]), 
  Sequence abc ^ $ \b \B, 
  Alternate OR |  */

