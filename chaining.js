const products = {
    name: 'phone',
    brand: 'samsung',
    color: {
        color1: 'black',
        color2: 'blue',
        color3: 'purple',
    },
    storage: {
        variation1: {
            ram: '3gb',
            rom: '32gb',
            price: '15000'
        },
        variation2: {
            ram: '4gb',
            rom: '64gb',
            price: '17000'
        },
        variation3: {
            ram: '6gb',
            rom: '128gb',
            price: '20000'
        },

    },

};
// console.log(Object.entries(products.storage.variation3));
// console.log(Object.keys(products.storage.variation3));
// console.log(Object.values(products.storage.variation3));
console.log(products.storage?.phoneMemory?.rom);