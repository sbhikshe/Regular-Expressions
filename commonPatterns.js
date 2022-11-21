/* Hex value */
const reHexTests = {
  re: /^#?([a-f0-9]{6}|[a-f0-9]{3})$/,
  testStrings: [
    '#aaa999',
    '#abf',
    'fff',
    '#afff',
    '#xyzz'
  ]
};

let re = reHexTests.re;
console.log('------------------------------------------------------');
console.log(`Regular expression: ${re} `);
for (const testStr of reHexTests.testStrings) {
  console.log(`${testStr}\t\t${re.test(testStr)}`);
}
console.log('------------------------------------------------------');

/* Email */
const reEmailTests = {
  re: /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/,
  testStrings: [
    'john.doe@gmail.com',
    'john_doe9@gmail.com',
    'john-doe-sr@gmail.com',
    'john#doe@gmail.com',
    'johnnycash$@gmail.com',
    'john.doe@fb-meta.com',
    'john.doe@fb-meta.de',
    'john.doe@iitm.ac.in'
  ]
};

re = reEmailTests.re;
console.log('------------------------------------------------------');
console.log(`Regular expression: ${re} `);
for (const testStr of reEmailTests.testStrings) {
  console.log(`${testStr}\t\t${re.test(testStr)}`);
}
console.log('------------------------------------------------------');

/* Url */
const reUrlTests = {
  re: /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
  testStrings: [
    'http://from0-to9.co.uk/',
    'https://from0-to9.edu',
    'from0-to9.org/blog-pages/',
    'from.0.to.9.com/blog/page-11/',
  ]
};

re = reUrlTests.re;
console.log('------------------------------------------------------');
console.log(`Regular expression: ${re} `);
for (const testStr of reUrlTests.testStrings) {
  console.log(`${testStr}\t\t\t${re.test(testStr)}`);
}
console.log('------------------------------------------------------');

/* HTML tag */
const reHTMLTagsTests = {
  re: /^<([a-z]+)([^<]+)*(?:>(.*)<\/\1>|\s+\/>)$/,
  testStrings: [
    '<tag src="somestr">characters</tag>',
    '<tag src="image1.jpg"></tag>',
    '<tag style="" src="" />'
  ]
};

re = reHTMLTagsTests.re;
console.log('------------------------------------------------------');
console.log(`Regular expression: ${re} `);
for (const testStr of reHTMLTagsTests.testStrings) {
  console.log(`${testStr}\t\t\t${re.test(testStr)}`);
}
console.log('------------------------------------------------------');
