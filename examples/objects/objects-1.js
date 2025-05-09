const array = [
    ['Fulano', 'fulano@gmail'],
    ['sicrano', 'sicrano@gmail']
];

const pessoa1 = {
    nome: 'fulan0',
    email: 'fulano@gmail.com'
};

pessoa1.nome = 'fulano';

// console.log(`
// ${pessoa1.nome} - ${pessoa1.email} - ${pessoa1.idade}
// `);

const pessoa2 = {
    nome: 'sicrano',
    email: 'sicrano@gmail.com'
}

// console.log(`
// ${pessoa2.nome} - ${pessoa2.email} - ${pessoa2.idade}
// `);

const arrayPessoas = [
    {
        nome: 'fulano',
        email: 'fulano@gmail.com'
    },

    {
        nome: 'sicrano',
        email: 'sicrano@gmail.com'
    }
];

// console.log(arrayPessoas[0].nome);

arrayPessoas.push(
    {
        nome: 'Maria',
        email: 'maria@gmail.com'

    });

// console.log(arrayPessoas);

const students = {
    20181234: {
        name: 'fulano',
        email: 'fulano@gmail.com',
    },
    20181235: {
        name: 'sicrano',
        email: 'sicrano@gmail.com',
    },
};

// console.log(students['20181234'].email);

students['20181234'].name = 'FULANO';

// console.log(students['20181234'].name);

// -----

const ip = {
    address: '192.168.0.2',
    mask: '255.255.255.0'
};

// console.log(ip); //=> { address: "192.168.0.2", mask: "255.255.255.0" }
// console.log(ip.address); //=> "192.168.0.2"
// console.log(ip['address']); //=> "192.168.0.2"
// console.log(ip.version);
ip.version = 'ipv6';
// console.log(ip.version);

delete ip.version;

const ipv6 = { ...ip, version: 'ipv6', mask: '255' };

// ipv6.version = 'ipv6';

// console.log(ip);
// console.log(ipv6);

const address = '192.168.0.2';
const mask = '255.255.255.0';
const version = 'v4';
console.log(
    {
        address: address,
        mask: mask,
        version: version
    });
console.log({
    address,
    mask,
    version
});

const ips = [
    { address: '192.168.0.2', mask: '255.255.255.0' },
    { address: '192.168.0.10', mask: '255.255.255.0' },
    { address: '192.168.0.26', mask: '255.255.255.0' },
]; 

console.log(
    ips.map((ip) => ip.address + '/' + ip.mask).join('\n')
);