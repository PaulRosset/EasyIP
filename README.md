# EasyIP

CLI tool to get your Public/Internal Address IP easily and quickly with few features in more.

## Install

```
npm install -g easy-ip
```

## Usage

```
easyip --help
```

```
Usage: cli [options ...]

  Options:

    -h, --help      output usage information
    -V, --version   output the version number
    -p, --pub       Show your Public Ip address (IPv4)
    -P, --pubLocal  Show your Public Ip address (IPv4) with your location depending the Ip address
    -i, --in4       Show your internal Ip address in IPv4 version
    -I, --in6       Show your internal Ip address in IPv6 version
```

## API

You can also use the API as a module with : 

```
var easyIP = require('easy-ip')

var ip = new easyIP()

ip.getPubIp().then((data) => {
    console.log(data)
})
```


## Tests

Few tests are available with mocha Framework by typing : 

```
npm test
```

## License

MIT License

Copyright (c) 2017 Paul Rosset