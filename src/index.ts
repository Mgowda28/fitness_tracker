import { FitnessTracker } from "./fitness";


const tracker = new FitnessTracker();
tracker.addUser("1", "Alice", 30, 60, 170);

tracker.logWorkout("1", { type: "Running", duration: 30 , caloriesBurned: 300, date: new Date() });
tracker.logWorkout("1", { type: "Cycling", duration: 60 , caloriesBurned: 500, date: new Date() });

console.log(tracker.getAllWorkoutsOf("1"));
console.log(tracker.getAllWorkoutsByType("1", "Running"));  
console.log(tracker.getAllWorkoutsByType("1", "Cycling"));
console.log(tracker.getUsers());
console.log(tracker.getUser("1"));
tracker.updateUser("1", { name: "Alice Smith" });
console.log(tracker.getUser("1"));