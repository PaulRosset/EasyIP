const _ = require('lodash')
const chalk = require('chalk')
const args = require('./args')

const error = chalk.bold.red

module.exports = (program, process, args) => {
    const argc = program.parse(process.argv)
    if (argc.rawArgs.length === 2 || argc.rawArgs.length > 4) {
        console.log(error('  \n  Provide good argument'))
        program.outputHelp()
        return false
    } else {
        _.forEach(args(program).test, (value, key) => {
            if (!_.isUndefined(value)) {
            args(program).func[key]()
            }
        })
    }
}