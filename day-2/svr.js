import express from 'express';
import path from 'path';
import bodyParser from 'body-parser';


const app = express();
const __dirname = path.resolve()

app.use(bodyParser.urlencoded({extended:false}))


app.get('/', (req, res) => {
    console.log('로그인 페이지');
    res.sendFile(__dirname+'/html/login.html')

})

app.get('/login', (req,res)=> {
    let id = req.query.id
    let pw = req.query.pw
    console.log(`${id} ${pw}`)
    res.send(`당신이 입력한 아이디와 패스워드는 ${id} ${pw}`)
})
    

app.listen(3000, () => {
    console.log('3000번에 귀를 대고 듣기 시작했음.');
})


