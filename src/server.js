const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 1. public 폴더 안의 CSS, 이미지, JS 등 정적 파일들을 브라우저에 보낼 수 있도록 설정
app.use(express.static(path.join(__dirname, 'public')));

// 2. 루트 경로('/')로 접속했을 때 public/index.html 파일을 보여줌
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
