const { resolve } = require("path")
const { cached } = require("./shared/utils")

async function findConfig() {
  const path = resolve(process.cwd(), "./deploy.config.js")

  const config = await require(path)

  return config
}

const requireConfig = cached(findConfig)
const currentConfig = cached(process.cwd)

module.exports = {
  requireConfig,
}
