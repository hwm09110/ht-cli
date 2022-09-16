#!/usr/bin/env node

function list() {
  const tplObj = require(`${__dirname}/../../template`)
  console.log(tplObj)
}

module.exports = list
