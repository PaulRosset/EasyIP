# EasyIP !

![Version Tag](https://img.shields.io/github/tag/PaulRosset/EasyIP.svg)
![Latest Version released](https://img.shields.io/github/release/PaulRosset/EasyIP.svg)

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

## Example

Input :

```
easyip -P
```

Output : 
```
Requested at : 18:31:01, 01-05-2017
Your Public Ip Address : 77.154.100.91
Localisation : Europe, France
Deep-Address : 92 Place Achille Peretti, 92200, Neuilly-sur-Seine, Hauts-de-Seine, Île-de-France
   Latitude : 48.88460
   Longitude : 2.26970
------------------
```


## API

Each method return a Promise with data.
You can also use the API as a module with : 

```
var easyIP = require('easy-ip')

var ip = new easyIP()

ip.getPubIp().then(data => {
    console.log(data)
})
```

## License

MIT License

Copyright (c) 2017 Paul Rosset