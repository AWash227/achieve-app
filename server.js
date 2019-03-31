import express from 'express';
import bodyParser from 'body-parser';
import habits from './routes/api/Habits';
import mongoose from 'mongoose';

const app = express();

const db = 'mongodb://localhost:27017/achieve-app';

mongoose.connect(db)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use(bodyParser.json());
const port = process.env.PORT || 3000;

app.use('/api/habits', habits);

app.get('/', (req, res) => {
  res.send('Hello World');
})


app.listen(port, () => console.log('Server started on port ' + port) + '.');