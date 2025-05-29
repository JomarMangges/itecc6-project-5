const express = require('express');
const app = express();
const mongoose = require('mongoose');
const workoutsRouter = require('./routes/workouts');

app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    next();
  });
  
app.use(express.json());
app.use('/api/workouts', workoutsRouter);
console.log('Routes loaded: /api/workouts');


const PORT = process.env.PORT || 3000;

mongoose.connect('mongodb+srv://deva:deva@cluster0.9gufx5t.mongodb.net/fitnessdb?retryWrites=true&w=majority&appName=Cluster0', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => console.log('MongoDB connected'))
.catch(err => console.log(err));

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
