const input = require('sync-input');

let totalTickets = 0;

let giftId = 1;
const Gift = function (name, price) {
  this.id = giftId++;
  this.name = name;
  this.price = price;
}

const gifts = [
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

function showGifts() {
  console.log("Here's the list of gifts:\n");

  if (gifts.length > 0) {
    gifts.forEach(gift => console.log(`${gift.id}- ${gift.name}, Cost: ${gift.price} tickets`));
  } else {
    console.log("Wow! There are no gifts to buy.");
  }
}

function buyGift() {
  if (gifts.length === 0) {
    console.log("Wow! There are no gifts to buy.");
    return;
  }

  const userInput = input("Enter the number of the gift you want to get: ");
  const errorMessage = validateNumberInput(userInput, 1, Number.MAX_VALUE);
  if (errorMessage) {
    console.log("Please enter a valid number!");
    return;
  }

  const giftId = Number(userInput);
  const giftIndex = gifts.findIndex(g => g.id === giftId);

  if (giftIndex === -1) {
    console.log("There is no gift with that number!");
    return;
  }

  const gift = gifts.find(g => g.id === giftId);
  if (gift.price > totalTickets) {
    console.log("You don't have enough tickets to buy this gift.");
    return;
  }

  gifts.splice(giftIndex, 1);
  totalTickets -= gift.price;
  console.log(`Here you go, one ${gift.name}!`);

  checkTickets();
}

function addTickets() {
  const tickets = Number(input("Enter the ticket amount: "));
  if (isNaN(tickets) || tickets < 0 || tickets > 1000) {
    console.log("Please enter a valid number between 0 and 1000.");
  } else {
    totalTickets += tickets;
    checkTickets();
  }
}

function checkTickets() {
  console.log("Total tickets: " + totalTickets);
}

function validateNumberInput(userInput, min, max) {
  if (!/^\d+$/.test(userInput)) {
    return "Please enter a valid number!\n";
  }
  const inputNumber = Number(userInput);
  if (inputNumber < min || inputNumber > max) {
    return "Please enter a valid number!\n";
  }
  return "";
}

function showMainMenu() {
  console.log("What do you want to do?");
  const userInput = input("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n");

  const errorMessage = validateNumberInput(userInput, 1, 5);
  if (errorMessage) {
    console.log("Please enter a valid number!");
    return 1;
  }
  const userChoice = Number(userInput);
  if (userChoice === 1) {
    buyGift();
  } else if (userChoice === 2) {
    addTickets();
  }
  else if (userChoice === 3) {
    checkTickets();
  }
  else if (userChoice === 4) {
    showGifts();
  } else if (userChoice === 5) {
    return -1;
  }
  return 1;
}

function main() {
  console.log("WELCOME TO THE CARNIVAL GIFT SHOP!");
  console.log("Hello friend! Thank you for visiting the carnival!");
  showGifts();
  console.log();

  while (showMainMenu() === 1) {
    console.log();
  }

  console.log("Have a nice day!");
}

main();