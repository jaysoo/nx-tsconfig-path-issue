const { join } = require('node:path');
const { register } = require('tsconfig-paths');
const config = join(__dirname, 'tsconfig.json');
register({
  baseUrl: '.',
  paths: require(config).compilerOptions.paths,
})
// require('ts-node').register(config);
// require('@nx/js/src/internal').registerTsProject(config)
console.log('>>> nx path', require.resolve('nx'));
