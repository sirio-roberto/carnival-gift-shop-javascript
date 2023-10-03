

const itemList = [
  "Teddy Bear",
  "Big Red Ball",
  "Huge Bear",
  "Candy",
  "Stuffed Tiger",
  "Stuffed Dragon",
  "Skateboard",
  "Toy Car",
  "Basketball",
  "Scary Mask"
];

function main() {
  console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
  console.log("Hello friend! Thank you for visiting the carnival!");
  console.log("Here's the list of gifts:\n");

  itemList.forEach(item => console.log(item));
}

main();