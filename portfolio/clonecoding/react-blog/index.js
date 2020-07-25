const express = require('express');
const app = express();
const mongoose = require('mongoose');
mongoose.connect('mongodb+srv://gilmu:root@react-blog.kd6dr.mongodb.net/<react-blog>?retryWrites=true&w=majority',
 {useNewUrlParser: true}).then(() => console.log('DB connected')).catch(err => console.error(err));



app.get('/', (req,res)=>{
  res.send('hellow world')
});




app.listen(5000);
 