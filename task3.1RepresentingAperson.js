// Task 3.1 Representing a Person

const user = {
    firstName : "John" , 
    lastName : 'Doe', 
    age : 30
}

user.toString = () => `Name: ${user.firstName} ${user.lastName} \n Age: ${user.age}`

console.log(String(user))