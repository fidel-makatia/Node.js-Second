var http=require('http');
var dt= require('./mymodule');
var fs=require('fs');


fs.appendFile('mytext.txt', 'Hi Fidel makumakumas!!!', (err)=>{
if(err)throw err;

    console.log("Saved");
})

http.createServer((req,res)=>{
   fs.readFile('index.html', (err,data)=>{
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write(data);
   return res.end();
   });
   // res.end('Hello World : '+ dt.myDate());
   
}).listen(3000);