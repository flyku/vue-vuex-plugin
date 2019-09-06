'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')

let merges = merge(prodEnv, {
  NODE_ENV: '"development"'
});
module.exports = merges;
