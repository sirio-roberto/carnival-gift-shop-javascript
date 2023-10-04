# Carnival Gift Shop

The Carnival Gift Shop is a simple text-based program that allows users to buy gifts using tickets and add more tickets to their account. It simulates a gift shop in a carnival where users can interact with the following features:

1. `Buy a Gift`: Users can buy gifts from a list of available options using their accumulated tickets.
2. `Add Tickets`: Users can add more tickets to their account.
3. `Check Tickets`: Users can check the total number of tickets they have.
4. `Show Gifts`: Users can view the list of available gifts with their prices in tickets.
5. `Exit the Shop`: Users can exit the shop when they are done.

## Getting Started

To run the Carnival Gift Shop program, follow these steps:

1. Ensure you have Node.js installed on your system.
2. Clone or download this repository to your local machine.
3. Open a terminal or command prompt and navigate to the project directory.
4. Install the required `sync-input` module by running:
    ```
   npm install sync-input
    ```
5. Run the program by executing the following command:

    ```
   node main.js
    ```

## Usage

1. `Buy a Gift`:
   * Enter `1` in the main menu.
   * Enter the number of the gift you want to purchase.
   * If you have enough tickets, the gift will be purchased, and the remaining tickets will be updated.
2. `Add Tickets`:
   * Enter `2` in the main menu.
   * Enter the number of tickets you want to add to your account.
3. `Check Tickets`:
   * Enter `3` in the main menu.
   * The program will display the total number of tickets you currently have.
4. `Show Gifts`:
   * Enter `4` in the main menu.
   * The program will display the list of available gifts with their prices in tickets.
5. `Exit the Shop`:
   * Enter `5` in the main menu to exit the shop.