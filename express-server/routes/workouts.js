const express = require('express');
const router = express.Router();
const Workout = require('../models/Workout');

// GET all workouts
router.get('/', async (req, res) => {
    const workouts = await Workout.find();
    res.json(workouts);
});

// GET workout by ID
router.get('/:id', async (req, res) => {
    const workout = await Workout.findById(req.params.id);
    res.json(workout);
});

// POST new workout
router.post('/', async (req, res) => {
    const workout = new Workout(req.body);
    await workout.save();
    res.status(201).json(workout);
});

// PUT update workout
router.put('/:id', async (req, res) => {
    const updatedWorkout = await Workout.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedWorkout);
});

// DELETE workout
router.delete('/:id', async (req, res) => {
    await Workout.findByIdAndDelete(req.params.id);
    res.json({ message: 'Workout deleted' });
});

module.exports = router;
