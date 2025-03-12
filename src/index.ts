import {addUser as importedAddUser, logWorkout, getAllWorkoutsOf, getAllWorkoutsByType, getUsers, getUser, updateUser} from './fitness';
import * as readline from 'readline';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

const menu = `
Choose an option:
1. Add User
2. Log Workout
3. Get All Workouts Of User
4. Get All Workouts By Type
5. Get All Users
6. Get User
7. Update User
8. Exit
`;

function showMenu() {
    console.log(menu);
    rl.question('Enter your choice: ', (c)=> handleMenu(c));
}

function addUser(){
    rl.question('Enter user ID: ', (id)=> {
        rl.question('Enter user name: ', (name)=> {
            rl.question('Enter user age: ', (age)=> {
                rl.question('Enter user weight: ', (weight)=> {
                    rl.question('Enter user height: ', (height)=> {
                            importedAddUser(id, name, parseInt(age), parseInt(weight), parseInt(height));
                            console.log('User added successfully.');
                        showMenu();
                    });
                });
            });
        });
    });
}

function LogWorkout(){
    rl.question('Enter user ID: ', (id)=> {
        rl.question('Enter workout type: ', (type)=> {
            rl.question('Enter workout start time: ', (duration)=> {
                rl.question('Enter workout end time: ', (caloriesBurned)=> {
                    rl.question('Enter workout comment: ', (date)=> {
                        logWorkout(id, {type, duration: parseInt(duration), caloriesBurned: parseInt(caloriesBurned), date});
                        console.log('Workout logged successfully.');
                        showMenu();
                    });
                });
            });
        });
    });
}

function getAllWorkoutsOfUser(){
    rl.question('Enter user ID: ', (id)=> {
        const workouts = getAllWorkoutsOf(id);
        console.log(workouts);
        showMenu();
    });
}

function getAllWorkoutsByTypeMenu(){
    rl.question('Enter user ID: ', (id)=> {
        rl.question('Enter workout type: ', (type)=> {
            const workouts = getAllWorkoutsByType(id, type);
            console.log(workouts);
            showMenu();
        });
    });
}

function getAllUsers(){
    const users = getUsers();
    console.log(users);
    showMenu();
}

function getUserMenu(){
    rl.question('Enter user ID: ', (id)=> {
        const user = getUser(id);
        console.log(user);
        showMenu();
    });
}

function updateUserMenu(){
    rl.question('Enter user ID: ', (id)=> {
        rl.question('Enter user name: ', (name)=> {
            rl.question('Enter user age: ', (age)=> {
                rl.question('Enter user weight: ', (weight)=> {
                    rl.question('Enter user height: ', (height)=> {
                        updateUser(id, { name, age: parseInt(age), weight: parseInt(weight), height: parseInt(height) });
                        console.log('User updated successfully.');
                        showMenu();
                    });
                });
            });
        });
    });
}

function handleMenu(choice: string){
    switch(choice){
        case '1':
            addUser();
            break;
        case '2':
            LogWorkout();
            break;
        case '3':
            getAllWorkoutsOfUser();
            break;
        case '4':
            getAllWorkoutsByTypeMenu();
            break;
        case '5':
            getAllUsers();
            break;
        case '6':
            getUserMenu();
            break;
        case '7':
            updateUserMenu();
            break;
        case '8':
            rl.close();
            break;
        default:
            console.log('Invalid choice.');
            showMenu();
    }
}

showMenu();