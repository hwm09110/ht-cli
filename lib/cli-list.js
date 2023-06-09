#!/usr/bin/env node
const { templateDir } = require('./config.js')
function list() {
  const tplObj = require(templateDir)
  console.log(tplObj)
}

module.exports = list
