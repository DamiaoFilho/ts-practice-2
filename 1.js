var Users = [
    { id: 1, name: "damiao", age: 21, active: true },
    { id: 2, name: "davy", age: 30, active: false },
    { id: 3, name: "joao", age: 25, active: false },
    { id: 4, name: "luiz", age: 15, active: false },
];
console.log("Active users");
var activeUsers = Users.filter(function (user) {
    return user.active === true;
});
activeUsers.map(function (user) {
    console.log(user.name);
});
console.log("Above 25 years");
var users25 = Users.filter(function (user) {
    return user.age > 25;
});
users25.map(function (user) {
    console.log(user.name, user.age);
});
console.log("Usernames");
var userNames = Users.map(function (user) {
    return user.name;
});
userNames.map(function (user) {
    console.log(user);
});
console.log("Age with plus 1");
Users.map(function (user) {
    user.age = user.age + 1;
    console.log(user.age);
});
console.log("Username and status");
Users.forEach(function (user) {
    console.log(user.name, user.active);
});
var totalUsers = Users.reduce(function (total, user) {
    return total + user.age;
}, 0);
console.log("Sum of ages: ", totalUsers);
var totalActiveUser = Users.reduce(function (total, user) {
    if (user.active === true) {
        return total + 1;
    }
    return total;
}, 0);
console.log("Total active users", totalUsers);
var joao = Users.find(function (user) {
    user.name === "João";
});
console.log(joao === null || joao === void 0 ? void 0 : joao.id, joao === null || joao === void 0 ? void 0 : joao.name, joao === null || joao === void 0 ? void 0 : joao.age, joao === null || joao === void 0 ? void 0 : joao.active);
var firstInactive = Users.find(function (user) {
    user.active === false;
});
console.log("First inactive");
console.log(firstInactive === null || firstInactive === void 0 ? void 0 : firstInactive.id, firstInactive === null || firstInactive === void 0 ? void 0 : firstInactive.name, firstInactive === null || firstInactive === void 0 ? void 0 : firstInactive.age, firstInactive === null || firstInactive === void 0 ? void 0 : firstInactive.active);
