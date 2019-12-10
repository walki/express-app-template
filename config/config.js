const _ = require('lodash');

// module variables
const config = require('./config.json');
const defaultConfig = config.development;
const environment = process.env.NODE_ENV || 'development';
const environmentConfig = config[environment];
const finalConfig = _.merge(defaultConfig, environmentConfig);

// all global variables should be referenced via global. syntax
global.config = finalConfig;

// log global.gConfig
console.log(`global.config: ${JSON.stringify(global.config, undefined, global.config.json_indentation)}`);
