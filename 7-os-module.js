const os = require('os')

const currentOS = {

    name: os.type(),
    release : os.release(),
    totalmem: os.totalmem(),
    uptime: os.uptime()/(60*60),
    arch : os.arch(),
    platform:os.platform(),
    version:os.version(),
    hostname:os.hostname()
}

module.exports.currentOS = currentOS 