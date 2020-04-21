var express = require('express')(),
    app = require('http').createServer(express),
    io = require('socket.io').listen(app),
    fs = require('fs'),
    url = require('url'),
    SerialPort = require('serialport')


async function main() {

    var a = await SerialPort.list()

    console.log(a)
}


main()



//app.listen(8000)
