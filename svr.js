const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('/ 에 대한 요청이 들어왔음');

    res.sendFile(__dirname + '/public.html');

})

app.post('/my_page', (req, res) => {
    console.log('/my_page 에 대한 요청 들어옴')
    res.sendFile(__dirname + '/wordle.html')
})

app.listen(3000, () => {
    console.log('3000번에 귀를 대고 듣기 시작했음.');
})