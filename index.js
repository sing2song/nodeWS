const express = require('express');

const app = express();
const PORT = process.env.PORT = 8000;

app.use(express.static('public'));//public 폴더 안에있는 파일들을 static file로 인식하도록 지정

app.listen(PORT, () => {
  console.log('Server is running at:',PORT);
});