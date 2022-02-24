const cars = ['Tesla', 'Mercedes', 'Honda']
const [ randomCar ] = cars
const [ ,otherRandomCar ] = cars
//Predict the output
console.log(randomCar)
console.log(otherRandomCar)

/* 
console.log(randomCar) // logs Tesla 
console.log(otherRandomCar) // logs Mercedes
*/
const employee = {
    name: 'Elon',
    age: 47,
    company: 'Tesla'
}
const { name: otherName } = employee;
//Predict the output
console.log(name);
console.log(otherName);
/*
console.log(name); // logs nada
console.log(otherName); // logs Elon;
*/ 
const person = {
    name: 'Phil Smith',
    age: 47,
    height: '6 feet'
}
const password = '12345';
const { password: hashedPassword } = person;  
//Predict the output
console.log(password);
console.log(hashedPassword);
/* 
console.log(password); // logs 12345
console.log(password); // logs undefined porque el valor password no se encuentra en el objeto person
*/
const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
const [,first] = numbers;
const [,,,second] = numbers;
const [,,,,,,,,third] = numbers;
//Predict the output
console.log(first == second);
console.log(first == third);
/*
console.log(first == second); // logs false 
console.log(first == third); // logs true
*/
const lastTest = {
    key: 'value',
    secondKey: [1, 5, 1, 8, 3, 3]
}
const { key } = lastTest;
const { secondKey } = lastTest;
const [ ,willThisWork] = secondKey;
//Predict the output
console.log(key);
console.log(secondKey);
console.log(secondKey[0]);
console.log(willThisWork);
/* 
console.log(key); // logs value
console.log(secondKey); // logs [1, 5, 1, 8, 3, 3]
console.log(secondKey[0]); // logs 1
console.log(willThisWork); // logs 5
*/