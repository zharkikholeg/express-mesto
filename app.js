const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const usersRoute = require('./routes/users');
const cardsRoute = require('./routes/cards');
const { login, createUser } = require('./controllers/users');
const auth = require('./middlewares/auth');
const errors = require('./middlewares/errors');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// app.use((req, res, next) => {
//   req.user = {
//     _id: '614c6aff4fa9f7ecf0948871',
//   };

//   next();
// });

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  autoIndex: true, //make this also true
});


app.post('/signin', login);
app.post('/signup', createUser);

app.use(auth);

app.use('/users', usersRoute);
app.use('/cards', cardsRoute);

app.use(errors);

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
