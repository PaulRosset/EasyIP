const ipAddress = require('./index.js')
const data = new ipAddress()
const chalk = require('chalk')

const error = chalk.bold.red
const major = chalk.green
const split = chalk.bold.yellow

module.exports = (program) => {
    return {
        test: {
            pub: program.pub,
            pubLocal: program.pubLocal,
            public: program.public,
            in4: program.in4,
            in6: program.in6
        },
        func: {
            pub: () => (
                data.getGeobyMyPubIp().then((data) => console.log(`   Requested at : ${major(data.date)}\n   Your Public Ip Address : ${major(data.ip)}\n${split('------------------')}`))
                .catch((err) => console.log(error(err)))
            ),
            pubLocal: () => (
                data.getGeobyMyPubIp().then((data) => console.log(`   Requested at : ${major(data.date)}\n   Your Public Ip Address : ${major(data.ip)}\n   Localisation : ${major(data.region)}, ${major(data.country)}\n   Deep-Address : ${major(data.city)}   ZipCode : ${major(data.postal)}\n      Latitude/Longitude : ${major(data.loc)}\n   Org : ${major(data.org)}\n${split('------------------')}`))
                .catch((err) => console.log(error(err)))
            ),
            public: () => (data.getGeobyMyPubIp(program.public).then((data) => console.log(`   Requested at : ${major(data.date)}\n   Your Public Ip Address asked : ${major(data.ip)}\n   Localisation : ${major(data.region)}, ${major(data.country)}\n   Deep-Address : ${major(data.city)}   ZipCode : ${major(data.postal)}\n      Latitude/Longitude : ${major(data.loc)}\n   Org : ${major(data.org)}\n${split('------------------')}`))
                .catch((err) => console.log(error(err)))
            ),
            in4: () => (
                data.getLocalIp().then((data) => console.log(`   Requested at : ${major(data.date)}\n   Your Internal Ip Address (IPv4) : ${major(data.ip)}\n${split('------------------')}`))
            ),
            in6: () => (
                data.getLocalIp('IPv6').then((data) => console.log(`   Requested at : ${major(data.date)}\n   Your Internal Ip Address (IPv6) : ${major(data.ip)}\n${split('------------------')}`))
            )
        }
    }
}