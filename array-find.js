const products = [
    {name: 'shirt', brand: 'next', price: 5000},
    {name: 'pant', brand:'denim', price:3000},
    {name: 'genji', brand:'crocodile', price:200},
    {name: 'jangia', brand:'rupa', price:500},
    {name: 'sharee', brand: 'unknown', price: 5000}
];
const findProduct = products.find(product => product.price == 5000);
console.log(findProduct);