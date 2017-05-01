#!/usr/bin/env node

const program = require('commander')
const chalk = require('chalk')
const ipAddress = require('./api/index.js')

let error = chalk.bold.red
let major = chalk.green
let split = chalk.bold.yellow
let data = new ipAddress()

program
    .version('1.0.0')
    .usage('[options ...]')
    .option('-p, --pub', 'Show your Public Ip address (IPv4)')
    .option('-P, --pubLocal', 'Show your Public Ip address (IPv4) with your location depending the Ip address')
    .option('-i, --in4', 'Show your internal Ip address in IPv4 version')
    .option('-I, --in6', 'Show your internal Ip address in IPv6 version')
    .parse(process.argv);

let argc = program.parse(process.argv)
if (argc.rawArgs.length === 1 || argc.rawArgs.length > 4) {
    console.log(error('  \n  Error in argument'))
    program.outputHelp()
}

program.pub ? data.getPubIp().then((data) => {
    console.log(`   Requested at : ${major(data.date)}\n   Your Public Ip Address : ${major(data.ip)}\n${split('------------------')}`)
}).catch((err) => {
    if (err) console.log(error(err))
}) : false

program.pubLocal ? data.getGeobyPubIp().then((data) => {
    console.log(`   Requested at : ${major(data.date)}\n   Your Public Ip Address : ${major(data.data.ipv4)}\n   Localisation : ${major(data.data.continent_name)}, ${major(data.data.country_name)}\n   Deep-Address : ${major(data.address.Match_addr)}\n      Latitude : ${major(data.data.latitude)}\n      Longitude : ${major(data.data.longitude)}\n${split('------------------')}`)
}).catch((err) => {
    if (err) console.log(error(err))
}) : false

program.in4 ? data.getLocalIp().then((data) => {
    console.log(`   Requested at : ${major(data.date)}\n   Your Internal Ip Address (IPv4) : ${major(data.ip)}\n${split('------------------')}`)
}) : false

program.in6 ? data.getLocalIp('IPv6').then((data) => {
    console.log(`   Requested at : ${major(data.date)}\n   Your Internal Ip Address (IPv6) : ${major(data.ip)}\n${split('------------------')}`)
}) : false


