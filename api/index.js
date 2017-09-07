const agent = require('superagent')
const _ = require('lodash')
const moment = require('moment')
const os = require('os')

class ipAddress {

    constructor() {
        this.interface = os.networkInterfaces()
        this.date = moment().format("HH:mm:ss, DD-MM-YYYY")
    }

    getGeobyMyPubIp(pubIp = '') {
        return new Promise((resolve, reject) => {
                agent
                .get(pubIp ? `https://ipinfo.io/${pubIp}/json` : `https://ipinfo.io/json`)
                .end((err, res) => {
                    if (err || res.body.bogon) reject('Error : Impossible to fetch data. It may your ip address is invalid.')
                    resolve(_.merge(res.body, {"date": this.date}))
                })
            })
    }

    getLocalIp(version = 'IPv4') {
        return new Promise((resolve, reject) => {
                if (!this.interface) reject("Error while loading interface Networking")
        _.forEach(this.interface, (el, key) => {
            _.forEach(this.interface[key], (el2, key2) => {
                if (el2.family === version && !el2.internal && this.interface[key].length === 2)
                    resolve({"family": version, "ip": el2.address, "date": this.date})
                })
            })
        })
    }

}

module.exports = ipAddress