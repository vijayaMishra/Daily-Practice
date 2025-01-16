let myself = {
    name : "Vijaya",
    age : 24,
    fiance : "Ankit",
    introducingPartner: function() {
        return `I am ${this.name}, ${this.age} years old, meet my fiance - ${this.fiance}, Hiiiii!`;
    }
}
console.log(myself.name);
console.log(myself.age);
console.log(myself.introducingPartner());