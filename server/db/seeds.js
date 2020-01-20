use golden_shoe;
db.dropDatabase();

db.shoes.insertMany([
    {
        make: "Nike",
        model: "Air",
        stockLevel: "10"
    },
    {
        make: "Adidas",
        model: "Three stripe",
        stockLevel: "5"
    }
]);