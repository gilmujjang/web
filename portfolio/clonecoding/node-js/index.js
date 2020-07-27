const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const { User } = require("./models/User");
const config = require('./config/key')
const cookieParser = require('cookie-parser');

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());
app.use(cookieParser()); 

const mongoose = require('mongoose');
const { json } = require('body-parser');

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDb Connected...'))
  .catch(err => console.log(err))



app.post('/register', (req, res) => {
   const user = new User(req.body)

   user.save((err, userInfo) => {
     if(err) return res.json({success: false, err})
     return res.status(200).json({ success: true })
   })
})


// login router

app.post('/login', (req, res) => {

  //요청된 이메일이 DB에 있는지 찾음
  User.findOne({ email: req.body.email }, (err,user) => {
    console.log('user', !user)
    if (!user) {
      return res.json({ loginSuccess: false, message: "가입되지 않은 이메일입니다" })
    }

    //이메일이 있으면 비번을 확인
    user.comparePassword(req.body.password, (err, isMatch) => {

      if (!isMatch) {
        return res.json({loginSuccess: false, message: "비밀번호가 틀렸습니다." })
      }
      

      ///비밀번호가 맞다면 토큰을 생성
      user.generateToken((err, user) => {
        if (err) return res.status(400).send(err);
      ///// 토큰을 저장
        res.cookie("x_auth", user.token)
          .status(200)
          .json({ loginSuccess: true, userId: user._id })

      })
    })
  })
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))