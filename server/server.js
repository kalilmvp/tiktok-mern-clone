import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import data from './data.js';
import Videos from './dbModel.js';

//app config
const app = express();
app.use(express.json());
app.use(cors());
const port = process.env.PORT || 9000;

//middlewares

//DB config
const connectionUrl = 'mongodb+srv://kalilmvp:csEkLvds7lJlPkUf@cluster0.ckdfu.mongodb.net/tiktok?retryWrites=true&w=majority';
mongoose.connect(connectionUrl, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true
});

//api endpoints
app.get('/', (req, res) => {
  res.status(200).send('It´s healthy');
});
app.get('/posts', (req, res) => {
  Videos.find({}, (error, data) => {
    if (error) {
      res.status(500).send({ error });
    } else {
      res.status(201).send(data);
    }
  });
});
app.post('/posts', (req, res) => {
  const dbVideos = req.body;

  Videos.create(dbVideos, (error, data) => {
    if (error) {
      res.status(500).send({ error });
    } else {
      res.status(200).send(data);
    }
  })
});

//listen
app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});