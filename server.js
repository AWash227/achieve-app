import express from 'express';
import bodyParser from 'body-parser';
import habits from './routes/api/Habits';
import goals from './routes/api/Goals';
import mongoose from 'mongoose';
import cors from 'cors';

const app = express();

const db = 'mongodb://localhost:27017/achieve-app';

// CORS support
app.use((req,res,next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE, OPTIONS");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  next();
})
mongoose.connect(db)
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

app.use(bodyParser.json());
const port = process.env.PORT || 4000;

app.use('/api/habits', habits);
app.use('/api/goals', goals)

app.get('/', (req, res) => {
  res.send('Hello World');
})


app.listen(port, () => console.log('Server started on port ' + port) + '.');
