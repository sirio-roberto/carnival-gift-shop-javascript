
let giftId = 1;
const Gift = function (name, price) {
  this.id = giftId++;
  this.name = name;
  this.price = price;
}

const itemList = [
  new Gift("Teddy Bear", 10),
  new Gift("Big Red Ball", 5),
  new Gift("Huge Bear", 50),
  new Gift("Candy", 8),
  new Gift("Stuffed Tiger", 15),
  new Gift("Stuffed Dragon", 30),
  new Gift("Skateboard", 100),
  new Gift("Toy Car", 25),
  new Gift("Basketball", 20),
  new Gift("Scary Mask", 75),
];

function main() {
  console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
  console.log("Hello friend! Thank you for visiting the carnival!");
  console.log("Here's the list of gifts:\n");

  itemList.forEach(item => console.log(`${item.id}- ${item.name}, Cost: ${item.price} tickets`));
}

main();