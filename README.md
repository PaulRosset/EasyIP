# EasyIP !

![Travis](https://travis-ci.org/PaulRosset/EasyIP.svg)
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
Usage: easyip [options ...]

  Options:

     -h, --help               output usage information
     -V, --version            output the version number
     -p, --pub                Show your Public Ip address (IPv4)
     -P, --pubLocal           Show your Public Ip address (IPv4) with your location depending the Ip address
     -S, --public [PublicIp]  Show details about ip address that you've provided (IPv4)
     -i, --in4                Show your internal Ip address in IPv4 version
     -I, --in6                Show your internal Ip address in IPv6 version
```

## Example

Input :

```
easyip -P
```

Output : 
```
Requested at : 21:04:41, 07-09-2017
   Your Public Ip Address : 86.215.29.150
   Localisation : Provence-Alpes-Côte d'Azur, FR
   Deep-Address : Tourrette-Levens   ZipCode : 06690
      Latitude/Longitude : 43.7875,7.2736
   Org : AS3215 Orange S.A.
------------------
```


## API

Each method return a Promise with data.
You can also use the API as a module with : 

```
var easyIP = require('easy-ip')

var ip = new easyIP()

ip.getGeobyMyPubIp().then(data => { // To have info about Public IP address
    console.log(data)
})

ip.getLocalIp(default: IPv4).then(data => { // To have info about Private IP address (IPv4/IPv6)
    console.log(data)
})
```

## License

MIT License

Copyright (c) 2017 Paul Rosset