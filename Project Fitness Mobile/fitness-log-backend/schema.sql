CREATE TABLE workouts (
  id INT AUTO_INCREMENT PRIMARY KEY,
  exercise VARCHAR(255) NOT NULL,
  sets INT NOT NULL,
  reps INT NOT NULL,
  weight DECIMAL(5,2),
  workout_date DATE DEFAULT CURRENT_DATE,
  notes TEXT
);
