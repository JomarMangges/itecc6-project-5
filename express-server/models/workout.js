const mongoose = require('mongoose');

const exerciseSchema = new mongoose.Schema({
    name: String,
    sets: Number,
    reps: Number,
    weight: Number,
    duration: Number
});

const workoutSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    exercises: [exerciseSchema],
    notes: String
});

module.exports = mongoose.model('Workout', workoutSchema);
