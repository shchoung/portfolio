const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// 현재 폴더의 index.html을 보여줍니다.
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
