const chalk = require("chalk")
const boxen = require("boxen")


const { build } = require("./core/build")

async function start(params, config) {
  console.log(`🚀 Starting ${chalk.rgb(160, 80, 246)(config.name)}...\n`)
  await build(config)
  console.log("\n")
}

module.exports = start
