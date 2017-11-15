#! /usr/bin/env node

var program = require('commander')
var e = require('./lib/express')
var k = require('./lib/koa')

program
    .version('0.0.1')

program
    .command('express')
    .option('-P, --path', 'express projects files install')
    .description('install express root files')
    .action(function(){
        e.init()
    })

program
    .command('koa')
    .option('-P, --path <path>', 'the path to save file')
    .option('-N, --name <string>', 'the name of initizing project')
    .description('install koa2 root files')
    .action(function(args){
        k.init(args)
    })

program.parse(process.argv)