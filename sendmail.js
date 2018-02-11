var nodemailer = require('nodemailer');  
var files=require("./getdir");

//读取文件完毕后发送邮件
var lists=files  //接收返回的附件数组信息
lists.then(function(arr){
   
     var AttArrObj=[];
     for(var i=0;i<arr.length;i++){
      var attobj=new Object();
      var filearr=arr[i].split("/");
      var filename=filearr[filearr.length-1]
      attobj.filename=filename
      attobj.path=arr[i];
      attobj.cid="kinddle"+i;
      AttArrObj.push(attobj)
     }
     console.log(AttArrObj)
     //导出后发送邮件
     var transporter = nodemailer.createTransport({  
      service: '126',  
      auth: {  
        user: 'kejunliang@126.com',  
        pass: 'kejunliang1234' //授权码,通过QQ获取  
      
      }  
      });  
      var mailOptions = {  
        from: 'kejunliang@126.com', // 发送者  
        to: 'kejunliang@126.com,kejunliang_c1157e@kindle.cn,kejunliang_d22782@kindle.cn', // 接受者,可以同时发送多个,以逗号隔开  
        subject: 'kinddle', // 标题  
        //text: 'Hello world', // 文本  
        html: `kinddle电子书`   ,
        attachments: AttArrObj   //附件信息
    
      };  
      
      transporter.sendMail(mailOptions, function (err, info) {  
        if (err) {  
          console.log(err);  
          return;  
        }  
      
        console.log('发送成功'); 
        //发送成功后删除目录下的所有文件
        var deletefiles=require("./getdirdelete");
      });  

 })

