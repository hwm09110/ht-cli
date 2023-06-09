#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const ora = require('ora')
const download = require('download-git-repo')
const { templateDir } = require('./config.js')
const tplObj = require(templateDir)

function create(inputParams) {
  console.log('inputParams', inputParams)
  console.log('tplObj', tplObj)

  // 当没有输入参数的时候给个提示
  if (inputParams.length < 1) return program.help()

  // 好比 vue init webpack project-name 的命令一样，第一个参数是 webpack，第二个参数是 project-name
  let templateName = inputParams[0]
  let projectName = inputParams[1]

  // 小小校验一下参数
  if (!tplObj[templateName]) {
    console.log(chalk.red('\n Template does not exit! \n '))
    return
  }
  if (!projectName) {
    console.log(chalk.red('\n Project should not be empty! \n '))
    return
  }

  url = tplObj[templateName]

  const gitLalTestUrl = `gitlab:http://192.168.8.244/honedu/frontend/ztxy/ztxy-wx.git`

  console.log('process.cwd()', process.cwd())

  console.log(chalk.white('\n Start generating... \n'))

  // 出现加载图标
  const spinner = ora('Downloading...')
  spinner.start()

  // 执行下载方法并传入参数
  download(gitLalTestUrl, projectName, (err) => {
    if (err) {
      spinner.fail()
      console.log(chalk.red(`Generation failed. ${err}`))
      return
    }
    // 结束加载图标
    spinner.succeed()
    console.log(chalk.green('\n Generation completed!'))
    console.log('\n To get started')
    console.log(`\n cd ${projectName} \n`)
  })
}

module.exports = create
