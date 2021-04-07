const { Command } = require("commander")
const { requireConfig } = require("./config")
const BaseConfig = require("./constants/config")

const program = new Command()

program.version(require("../package").version)

program.usage("<command>")

program
  .command("start")
  .description("start to run the deploy system")
  .option("-b --build <command>", "run project build command")
  .option("-u --unzip <assetName>", "unzip dist assets")
  .action(async (cmd) => {
    const config = await requireConfig()
    ;(await require("./index"))(cmd, config)
  })

program.parse(process.argv)

if (!process.argv.slice(2).length) {
  program.outputHelp()
}
