const fs = require("fs-extra")
const path = require("path")
const paths = require("../config/paths")
const chalk = require("chalk")
const dotenv = require("dotenv")

const fonts = paths.appNodeModules + "/font-awesome/fonts"
const fontsDestination = paths.fontDevPath

fs
  .copy(fonts, fontsDestination)
  .then(() => {
    console.log(`
      ${chalk.white.underline("Fonts Destination Path")} : ${chalk.white(
      fontsDestination
    )}
    `)

    console.log(`
      ${chalk.underline("Fonts Source Object")}: ${chalk.white(fonts)}
    `)

    console.log(chalk.white.bgGreen("Successfuly!"))
  })
  .catch(err => console.error(err))
