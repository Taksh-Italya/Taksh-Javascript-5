// Object := Collection of Multiple Datatypes ( Physical entity)

let person = {
    Name : 'Taksh',
    Age : 21,
    Email : 'Taksh@.com',
    sayhello : function () {
        console.log("Hello Person ....");
    }
};

console.log(person);
// console.log(person.Name);
// console.log(person.Age);
// console.log(person.Email);

console.log(person['Name']);
console.log(person['Age']);
person.gender = "male"

// console.log(person.hasownproperty('Age'));

console.log(Object.keys(person));
console.log(Object.values(person));

delete person.Age;
console.log(person);









