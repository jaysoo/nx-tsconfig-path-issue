const { join } = require('node:path');
const { register } = require('tsconfig-paths');
const config = join(__dirname, 'tsconfig.json');
// If you comment this out, then paths will resolve correctly
register({ baseUrl: '.', paths: require(config).compilerOptions.paths })
console.log('>>> nx path', require.resolve('nx'));
// This will not resolve without the register above, since foo is not a valid package
console.log('>>> foo path', require.resolve('foo'));
