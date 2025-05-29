const mongoose = require('mongoose');

const workoutSchema = new mongoose.Schema({
    exercise: { type: String, required: true },
    reps: { type: Number, required: true },
    sets: { type: Number, required: true },
    weight: { type: Number },
    date: { type: Date, default: Date.now },
    notes: { type: String }
});

module.exports = mongoose.model('Workout', workoutSchema);
