const express = require('express');
const app = express();
const port = 5000;
const bodyParser = require('body-parser');
const { User } = require("./models/User");

app.use(bodyParser.urlencoded({extended: true}));

app.use(bodyParser.json());

const mongoose = require('mongoose');
const { json } = require('body-parser');

mongoose.connect('mongodb+srv://gilmu:root@react-blog.kd6dr.mongodb.net/<dbname>?retryWrites=true&w=majority', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDb Connected...'))
  .catch(err => console.log(err))


app.get('/', (req, res) => res.send('hellow node.js'))

app.post('/register', (req, res) => {
   const user = new User(req.body)

   user.save((err, userInfo) => {
     if(err) return res.json({
       success: false, err
      })
     return res.status(200).json({
       success: true
      })
   })
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`))