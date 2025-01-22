var person = {
    firstName: "Vijaya",
    lastName: "Mishra",

    getFullName() {
        return this.firstName + " " + this.lastName;
    }
}

console.log(person.firstName);
console.log(person.getFullName());