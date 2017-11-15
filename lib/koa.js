'use strict'

const download = require('download-git-repo')
const fse = require('fs-extra')
const fs = require('fs')
exports.init = function(args){
    console.log('koa2 initinizing...')
    const path = args.path ? args.path: './temp'

    download('pokerII/project-template', path, asyncFiles)
    
    async function moveFiles(){
        var result = await fse.move(path + '/koa2', './' + args.name, { overwrite: true })
        return result
    }
    async function asyncFiles(err){
        var response
        if(err){
            throw err
        }else{
            console.log('koa2 template downloaded...');
            await moveFiles()
            return await fse.remove(path)
        }
    }
}