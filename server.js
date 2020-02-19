const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.port || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/api/customers', (req,res)=>{
    res.send([
        {
            'id': 1,
            'img': 'http://placeimg.com/64/64/1',
            'name': '홍길동',
            'birthday': '961120',
            'gender': '남자',
            'job': '대학생'
        },
        {
            'id': 2,
            'img': 'http://placeimg.com/64/64/2',
            'name': '홍길순',
            'birthday': '920205',
            'gender': '여자',
            'job': '간호사'
        },
        {
            'id': 3,
            'img': 'http://placeimg.com/64/64/3',
            'name': '홍길자',
            'birthday': '931005',
            'gender': '여자',
            'job': '회사원'
        }
    ]);
});

app.listen(port, ()=>console.log(`Listening on port ${port}`));