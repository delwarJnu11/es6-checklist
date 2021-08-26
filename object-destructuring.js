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
            fruits: ['apple', 'malta', 'komla'],
            ram: '6gb',
            rom: '128gb',
            price: '20000'
        },

    },

};
// const {color1,color2,color3} = products.color;
// console.log([color1,color2,color3]); 
// const {ram,rom,price} = products.storage.variation1;
// console.log(ram,rom,price);
const { storage: { variation1: { ram, rom, price } } } = products;
const { color: { color1, color2, color3 } } = products;
console.log(ram, rom, price);
console.log(color1, color2, color3);