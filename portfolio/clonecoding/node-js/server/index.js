const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { User } = require("./models/User");
const { auth } = require("./middleware/auth.js")
const config = require('./config/key')
const cookieParser = require('cookie-parser');
const mongoose = require('mongoose');
const { json } = require('body-parser');
const port = 5000;



app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cookieParser()); 

mongoose.connect(config.mongoURI, {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDb Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('hi'))

app.get('/api/hello', (req, res) => {
  res.send("ㅎㅇ")
})



app.post('/api/users/register', (req, res) => {
   const user = new User(req.body)

   user.save((err, userInfo) => {
     if(err) return res.json({success: false, err})
     return res.status(200).json({ success: true })
   })
})  


// login router

app.post('/api/users/login', (req, res) => {

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


app.get('/api/users/auth', auth, (req, res) => {
  res.status(200).json({
    _id: req.user._id,
    isAdmin: req.user.role === 0 ? false : true,
    isAuth: true,
    email: req.user.email,
    name: req.user.name
  })

})


app.get('/api/users/logout', auth, (req, res) => {
  User.findOneAndUpdate(
    {_id: req.user._id},
    {token: ""},
    (err, user) => {
      if(err) return res.json({ success: false, err});
      return res.status(200).send({success: true})
    }
  )
})


app.listen(port, () => console.log(`Example app listening on port ${port}!`))