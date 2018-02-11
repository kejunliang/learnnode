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
          
            console.log('清除文件名开始:' + path + '/' + file);
            fs.unlinkSync(path + '/' + file);
            console.log('清除文件名:' + path + '/' + file);
        })
        resolve(arr)
    })
  })
}

var list=getfiles(path)
module.exports=list

// list.then(function(arr){
//     console.log("导出=="+arr)
//     exports.files=arr

// })

