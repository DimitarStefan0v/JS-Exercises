function createPerson(firstName, lastName) {
    const result = {
        firstName,
        lastName,
        fullName: ``
    };

    Object.defineProperty(result, 'fullName', {
        get() {
            return `${this.firstName} ${this.lastName}`;
        },
        set(value) {
            const [firstName, lastName] = value.split(' ');
            if (firstName != undefined && lastName != undefined) {
                this.firstName = firstName,
                this.lastName = lastName
            }
        },
        configurable: true,
        enumerable: true
    });

    return result;
}

let person1 = createPerson("Peter", "Ivanov");
console.log(person1.fullName); //Peter Ivanov
person1.firstName = "George";
console.log(person1.fullName); //George Ivanov
person1.lastName = "Peterson";
console.log(person1.fullName); //George Peterson
person1.fullName = "Nikola Tesla";
console.log(person1.firstName); //Nikola
console.log(person1.lastName); //Tesla

let person2 = createPerson("Albert", "Simpson");
console.log(person2.fullName); //Albert Simpson
person2.firstName = "Simon";
console.log(person2.fullName); //Simon Simpson
person2.fullName = "Peter";
console.log(person2.firstName);  // Simon
console.log(person2.lastName);  // Simpson