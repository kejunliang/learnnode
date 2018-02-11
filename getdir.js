var fs=require("fs");
var path="F:\kiddle";

function getfiles(path){
  return new Promise(function(resolve,reject){
    fs.readdir(path,function(err,files){
        if(err){
            console.log('error:\n' + err);
            resolve(err);
        }
        var arr=[];
        files.forEach(function(file){
            console.log('文件名:' + path + '/' + file);
            console.log(arr)
            arr.push(path + '/' + file)
            console.log(arr)
        })
        resolve(arr)
    })
  })
}

console.log(11)
var list=getfiles(path)
module.exports=list

// list.then(function(arr){
//     console.log("导出=="+arr)
//     exports.files=arr

// })

