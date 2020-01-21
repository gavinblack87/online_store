
use golden_shoe;
db.dropDatabase();

db.shoes.insertMany([
    {
        make: "Nike",
        model: "Air",
        image: "",
        stockLevel: "10",
        gender: "Mens",
        price: 10.99,
        type: "Trainers",
        colours: ["Black", "White", "Navy"],
        rating: 4.5,
        description: "The Nike Air Force 1 is a classic basketball design with a modern twist. Featuring all the elements that make this style a favourite; tough leather upper with clean cut lines, extensive stitch detail and chunky air sole unit to top off."
    },
    {
        make: "Adidas",
        model: "Gazelle",
        image: "",
        stockLevel: "5",
        gender: "unisex",
        price: 70.99,
        type: "Trainers",
        colours: ["Black", "White"],
        rating: 4.3,
        description: "The only way adidas can make their fan-favourite Gazelle even more iconic, is to deliver it in a slick triple black colourway. This versatile trainer is ready to take on your everyday with a premium suede upper and authentic 3-Stripe and tongue branding."
    }
]);