type Workout = {
    type: string;
    duration: number; 
    caloriesBurned: number;
    date: Date;
};

type User = {
    id: string;
    name: string;
    age: number;
    weight: number;
    height: number;
    workouts: Workout[];
};

export class FitnessTracker {
    private users: User[] = [];

    addUser(id: string, name: string, age: number, weight: number, height: number): void {
        if (this.users.find(user => user.id === id)) {
            throw new Error(`User with id ${id} already exists.`);
        }
        this.users.push({ id, name, age, weight, height, workouts: [] });
    }

    logWorkout(userId: string, workout: Workout): void {
        const user = this.users.find(user => user.id === userId);
        if (!user) {
            throw new Error(`User with id ${userId} not found.`);
        }
        user.workouts.push(workout);
    }

    getAllWorkoutsOf(userId: string): Workout[] {
        const user = this.users.find(user => user.id === userId);
        if (!user) {
            throw new Error(`User with id ${userId} not found.`);
        }
        return user.workouts;
    }

    getAllWorkoutsByType(userId: string, type: string): Workout[] {
        const user = this.users.find(user => user.id === userId);
        if (!user) {
            throw new Error(`User with id ${userId} not found.`);
        }
        return user.workouts.filter(workout => workout.type === type);
    }

    getUsers(): User[] {
        return this.users;
    }

    getUser(id: string): User | undefined {
        return this.users.find(user => user.id === id);
    }

    updateUser(id: string, updatedFields: Partial<Omit<User, 'id'>>): void {
        const user = this.users.find(user => user.id === id);
        if (!user) {
            throw new Error(`User with id ${id} not found.`);
        }
        Object.assign(user, updatedFields);
    }
}