#!/usr/bin/env node

const program = require('commander')
const init = require('./api/init')
const args = require('./api/args')

program
    .version('1.0.3')
    .usage('[options ...]')
    .option('-p, --pub', 'Show your Public Ip address (IPv4)')
    .option('-P, --pubLocal', 'Show your Public Ip address (IPv4) with your location depending the Ip address')
    .option('-S, --public [PublicIp]', 'Show details about ip address that you\'ve provided (IPv4)')
    .option('-i, --in4', 'Show your internal Ip address in IPv4 version')
    .option('-I, --in6', 'Show your internal Ip address in IPv6 version')
    .parse(process.argv)


init(program, process, args)