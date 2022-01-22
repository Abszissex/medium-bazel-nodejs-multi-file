// Import 'second' module
const myModule = require('./subfolder/second');

// Expecting 'Hello Bazel' as output
console.log(myModule.myFunc('Bazel'));
