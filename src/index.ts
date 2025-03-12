import {addUser as importedAddUser, logWorkout, getAllWorkoutsOf, getAllWorkoutsByType, getUsers, getUser, updateUser, addUser} from './fitness';


addUser('1', 'Alice', 30, 60, 160);
addUser('2', 'Bob Brown', 25, 70, 170);     
addUser('3  ', 'Charlie Day', 35, 80, 180);

logWorkout('1', { type: 'running',  duration: 30  , caloriesBurned: 300, date: '2020-01-01' });
logWorkout('1', { type: 'cycling',  duration: 60  , caloriesBurned: 500, date: '2020-01-02' });

logWorkout('2', { type: 'running',  duration: 40  , caloriesBurned: 400, date: '2020-01-01' });
logWorkout('2', { type: 'cycling',  duration: 70  , caloriesBurned: 600, date: '2020-01-02' });

logWorkout('3  ', { type: 'running',  duration: 50  , caloriesBurned: 500, date: '2020-01-01' });
logWorkout('3  ', { type: 'cycling',  duration: 80  , caloriesBurned: 800, date: '2020-01-02' });

console.log("All users\n",getUsers());
console.log("User with id :1\n",getUser('1'));  

console.log("Workouts of user with ID 1\n",getAllWorkoutsOf('1'));
console.log("Workout Types of User With id 1\n",getAllWorkoutsByType('1', 'running'));

console.log("Workouts of user 2\n",getAllWorkoutsOf('2'));
console.log(getAllWorkoutsByType('2', 'running'));
console.log(getAllWorkoutsByType('2', 'cycling'));

console.log("Workouts of user with ID 3\n",getAllWorkoutsOf('3  '));
console.log(getAllWorkoutsByType('3 ','running'));

updateUser('1', { name: 'Alice Smith', age: 31, weight: 61, height: 161 });
console.log("Updated User with id 1\n",getUser('1'));