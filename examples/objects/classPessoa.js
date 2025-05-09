class Pessoa {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    print() {
        console.log(`Nome: ${ this.name }, Email: ${this.email}`);
    }
}

const p1 = new Pessoa('Fulano', 'fulano@gmail.com');
const p2 = new Pessoa('Sicrano', 'sicrano@gmail.com');

p1.idade = 30;
p1.print();
p2.print();