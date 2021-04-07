const ora = require("ora")
const shell = require("shelljs")
const chalk = require("chalk")

const build = async (config) => {
  console.log(`${chalk.gray("[1/6]")} 📦 Building project...`)
  const spinner = ora(`Loading build...`).start()
  try {
    const NS_PER_SEC = 1e9
    const time = process.hrtime()

    const val = await shell.exec("npm run bd", { silent: true })
    spinner.stop()
    console.log(`${chalk.green("success")} Build complete`)

    const diff = process.hrtime(time)
    console.log(
      `Done in ${Math.round(
        (diff[0] * NS_PER_SEC + diff[1]) / NS_PER_SEC
      ).toFixed(2)}s`
    )
  } catch (error) {
    spinner.stop()
    console.log(
      `${chalk.bgRed.white(ERROR)}  ${chalk.red("Build failed with errors.")}`
    )
    console.log(error)
  }
}

module.exports = {
  build,
}
