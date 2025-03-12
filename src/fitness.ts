type Workout = {
    type: string;
    duration: number;  
    caloriesBurned: number;
    date: string;  
  };
  
  type User = {
    id: string;
    name: string;
    age: number;
    weight: number;  
    height: number;  
  };
  
  const users: Map<string, User> = new Map();
  const workouts: Map<string, Workout[]> = new Map();
  
  function addUser(id: string, name: string, age: number, weight: number, height: number): void {
    if (users.has(id)) {
      throw new Error(`User with ID ${id} already exists.`);
    }
    if (age <= 0 || weight <= 0 || height <= 0) {
      throw new Error("Age, weight, and height must be positive numbers.");
    }
    users.set(id, { id, name, age, weight, height });
    workouts.set(id, []);
  }
  
  function logWorkout(userId: string, workout: Workout): void {
    if (!users.has(userId)) {
      throw new Error(`User with ID ${userId} not found.`);
    }
    workouts.get(userId)!.push(workout);
  }
  
  function getAllWorkoutsOf(userId: string): Workout[] {
    if (!users.has(userId)) {
      throw new Error(`User with ID ${userId} not found.`);
    }
    return workouts.get(userId)!;
  }
  
  function getAllWorkoutsByType(userId: string, type: string): Workout[] {
    if (!users.has(userId)) {
      throw new Error(`User with ID ${userId} not found.`);
    }
    return workouts.get(userId)!.filter(workout => workout.type === type);
  }
  
  function getUsers(): User[] {
    return Array.from(users.values());
  }
  
  function getUser(id: string): User {
    const user = users.get(id);
    if (!user) {
      throw new Error(`User with ID ${id} not found.`);
    }
    return user;
  }
  
  function updateUser(id: string, updatedFields: Partial<Omit<User, 'id'>>): void {
    const user = users.get(id);
    if (!user) {
      throw new Error(`User with ID ${id} not found.`);
    }
    users.set(id, { ...user, ...updatedFields });
  }
  

  export { addUser, logWorkout, getAllWorkoutsOf, getAllWorkoutsByType, getUsers, getUser, updateUser };