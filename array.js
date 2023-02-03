const country = 'bangladesh';
const age = 52;
const inIndependent = true;
const student = { id : 121, age: 11, name : 'agun'};
const friends = [13, 14, 11, 17, 21, 16, 15,20];
function add(num1, num2){
    return num1 + num2;
}

console.log(typeof country);
console.log(typeof age);
console.log(typeof inIndependent);
console.log(typeof student);
//check array using Array.isArray
console.log(Array.isArray(friends));
console.log(typeof add);

//...................
console.log(friends.includes(19));
console.log(friends.includes(21));
