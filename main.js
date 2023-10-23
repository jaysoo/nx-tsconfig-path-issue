const { join } = require('node:path');
const { register } = require('tsconfig-paths');
const config = join(__dirname, 'tsconfig.json');
// If you comment this out, then paths will resolve correctly
register({ baseUrl: '.', paths: require(config).compilerOptions.paths })
console.log('>>> nx path', require.resolve('nx'));
// This will not resolve without the register above, since foo is not a valid package
console.log('>>> foo path', require.resolve('foo'));

// Fix/Workaround
console.log('>>> nx path', require.resolve('nx/'));
console.log('>>> foo path', require.resolve('foo/'));
// These will work as it forces Node to look in a directory name nx/ or foo/ respectively in node_modules
// The result will work as nx will be resolved but foo will not be resolved
