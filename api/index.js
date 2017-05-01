const agent = require('superagent')
const _ = require('lodash')
const moment = require('moment')
const os = require('os')

class ipAddress {

    constructor() {
        this.interface = os.networkInterfaces()
        this.date = moment().format("HH:mm:ss, DD-MM-YYYY")
    }

    getPubIp() {
        return new Promise((resolve, reject) => {
                agent
                .get('https://api.ipify.org?format=json')
                .end((err, res) => {
                    if (err) reject(err)
                    resolve(_.merge(res.body, {"date": this.date}))
                });
        })
    }

    setGeo(lat, long) {
        return new Promise((resolve, reject) => {
                agent
                .get(`http://geocode.arcgis.com/arcgis/rest/services/World/GeocodeServer/reverseGeocode?location=${long}%2C+${lat}&distance=200&f=pjson`)
                .end((err, res) => {
                    if (err) reject(err)
                    resolve(res.text)
                })
            })
    }

    getGeobyPubIp() {
        return new Promise((resolve, reject) => {
                this.getPubIp().then((dataIp) => {
                agent
                .get(`https://ipvigilante.com/${dataIp.ip}`)
                .end((err, res) => {
                    if (err) reject(err)
                    this.setGeo(res.body.data.latitude, res.body.data.longitude).then((data) => {
                        resolve(_.merge(res.body, {"date": this.date}, JSON.parse(data)))
                    })
                })
            }).catch((failed) => {
                if (failed) console.log(failed)
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