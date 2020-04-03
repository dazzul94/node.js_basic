var fs = require('fs');
 
 
fs.open('mynewfile4.txt','w',function(err,fd){
   
    var buf = new Buffer('파일 쓰기 \n');
    console.log("open 이후");
    console.log(buf);
    console.log(buf.length);
    
    fs.write(fd,buf,0,buf.length,null, function(err,written,buffer){
     
        console.log('write 이후');
        console.log("err : "+err,"\n\written :"+written,"\n\buffer "+buffer);
        
    
        fs.close(fd, function(){
            console.log('fd====', fd);
        });
    }); 
        
});