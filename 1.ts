interface User{
    id: number,
    name: string,
    age: number,
    active: boolean
}

const Users: User[] = [
    { id: 1, name: "damiao", age: 21, active: true},
    { id: 2, name: "davy", age: 30, active: false},
    { id: 3, name: "joao", age: 25, active: false},
    { id: 4, name: "luiz", age: 15, active: false},
]

console.log("Active users")
const activeUsers = Users.filter((user) => {
    return user.active === true
})
activeUsers.map((user) => {
    console.log(user.name)
})

console.log("Above 25 years")
const users25 = Users.filter((user) => {
    return user.age > 25
})
users25.map((user) => {
    console.log(user.name, user.age)
})

console.log("Usernames")
const userNames = Users.map((user) => {
    return user.name
})
userNames.map((user) => {
    console.log(user)
})

console.log("Age with plus 1")
Users.map((user) => {
    user.age = user.age + 1
    console.log(user.age)
})

console.log("Username and status")
Users.forEach((user) => {
    console.log(user.name, user.active)
})

const totalUsers = Users.reduce((total, user) => 
    total + user.age, 0
)
console.log("Sum of ages: ", totalUsers)

const totalActiveUser = Users.reduce((total, user) => {
    if (user.active === true){
        return total + 1
    }
    return total
}, 0)

console.log("Total active users", totalUsers)

const joao = Users.find((user) => {
    user.name === "João"
})
console.log(joao?.id, joao?.name, joao?.age, joao?.active)

const firstInactive = Users.find((user) => {
    user.active === false
})
console.log("First inactive")
console.log(firstInactive?.id, firstInactive?.name, firstInactive?.age, firstInactive?.active)



