var http = require('http');
var fs = require('fs');
var app = http.createServer(function(request,response){
    var url = request.url;
    if(request.url == '/'){
      url = '/index.html';
    }
    if(request.url == '/favicon.ico'){
        response.writeHead(404);
        response.end();
        return;
    }
    response.writeHead(200);
    console.log(__dirname+ url);//디렉토리이름+url
    response.end(fs.readFileSync(__dirname + url));//경로의 파일을 읽는다
    //보내는 데이터의 내용
});
app.listen(3000);//포트번호