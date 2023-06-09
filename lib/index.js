#!/usr/bin/env node

const program = require('commander')

// 定义当前版本
// 定义使用方法
// 定义四个指令
program.version(require('../package').version).usage('<command> [options]')

program
  .command('add')
  .description('add a new template')
  .alias('a')
  .action(function () {
    require('./cli-add')()
  })

program
  .command('delete')
  .description('delete a template')
  .alias('d')
  .action(function () {
    require('./cli-delete')()
  })

program
  .command('list')
  .description('list all the templates')
  .alias('l')
  .action(function () {
    require('./cli-list')()
  })

program
  .command('create')
  .description('generate a new project from a template')
  .alias('c')
  .usage('<template-name> [project-name]')
  // .option('-p, --preset <presetName>', 'Skip prompts and use saved or remote preset')
  .option('-p, --preset [presetName]', 'Skip prompts and use saved or remote preset', '123')
  .option('-d, --default', 'Skip prompts and use default preset')
  .action(function (name, cmd) {
    console.log(name, cmd)
    // require('./cli-create')(program.args.slice(1))
  })

// 解析命令行参数
program.parse(process.argv)

if (!program.args.length) {
  program.help()
}
