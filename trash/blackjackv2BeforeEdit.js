console.log("You have the bridge commander");	

//This is the player class
function Player (name, position) {
	this.name = name;
	this.position = position;
	this.chipCount = 0;
	this.handOfCards = [];
	this.playerStatus = true;

	this.turnCardsIntoDealer = function () {
		//this function needs to clear hand OfCards - called on deal click
		//needs to check if hand is empty
		return true;
	}


};
//This is the dealer class
function Dealer (name, deckOfCards) {
	this.name = name;
	this.deckOfCards = deckOfCards;
	this.handOfCards = []; //could i use a prototype?

	this.shuffleDeck = function (deck){
	    let counter = deck.length;

	    // While there are elements in the array
	    while (counter > 0) {
	        // Pick a random index
	        let index = Math.floor(Math.random() * counter);
	        // Decrease counter by 1
	        counter--;
	        // And swap the last element with it
	        let temp = deck[counter];
	        deck[counter] = deck[index];
	        deck[index] = temp;
    	}
    }

    this.dealCard = function (deck, dealer, players) {
    	return true;
    }

	this.dealCardstoPlayersSelf = function (player) {
		for (var i = 1; i <= 2; i++) {

			player.handOfCards.push(Table.deckOfCards[0]);
			this.deckOfCards.shift();
			this.handOfCards.push(Table.deckOfCards[0]);
			this.deckOfCards.shift();
		}
		console.log(player.handOfCards + " this is the player hand");
		console.log(this.handOfCards + " this is the dealer hand");
	}

	this.dealCardsToTable = function () {
		Table.placeCardsOnTable(Player1, "playerOneHand", "number1", 0, 0);
		Table.placeCardsOnTable(Player1, "playerOneHand", "number2", 1, 1);
		Table.placeCardsOnTable(beginningDealer, "dealerHand", "dNumber1", 0, 0);
		Table.placeCardsOnTable(beginningDealer, "dealerHand", "dNumber2", 1, 1);
	}

	this.newDealerHand = function () {
		//this needs to emoty handOfCards .... called on "Deal" click
		//check if handOfCards is empty. 
		return true;
	}
};

//Creates the table object literal. 
var Table = {
	color : "green",
	numberOfPlayers : 2,
	playerArray : [],
	deckOfCards : [],
	hasHandBeenDealt : false,
	placeCardsOnTable : function (currentHand, currentLocation, numberOfCardDealt, objectNumber, cardNumberForDeal) {
		//create the elements for a new card
		hasHandBeenDealt = true;
		appendLocation = document.getElementById(currentLocation)
		let newCard = document.createElement("div");
		let cardHigh = document.createElement("div");
		let cardLow = document.createElement("div");
		newCard.setAttribute("id", numberOfCardDealt);
		cardHigh.setAttribute("class", "cardHigher");
		cardLow.setAttribute("class", "cardLower");
		cardLocation = document.getElementById(numberOfCardDealt);
		let cardSuit;
		let cardNumber;
		//text nodes created in loop
		cardSuit = document.createTextNode("no suit")
		cardNumber = document.createTextNode(currentHand.handOfCards[cardNumberForDeal]);
		console.log(newCard);
		appendLocation.appendChild(newCard);
		cardLocation = document.getElementById(numberOfCardDealt);
		cardLocation.appendChild(cardHigh);
		cardLocation.appendChild(cardLow);
		cardHighDOM = document.getElementsByClassName("cardHigher");
		cardLowDOM = document.getElementsByClassName("cardLower");
		cardHighDOM[objectNumber].appendChild(cardSuit);
		cardLowDOM[objectNumber].appendChild(cardNumber);
	},
	newHand : function () {
		console.log("This has been used when clicked");
		let node = document.getElementById("playerOneHand");
		if (hasHandBeenDealt === true){
			console.log("Removes!!!!!");
			node.parentNode.removeChild(node);
		} else {
			newPlayerHand = document.createElement("div")
			newPlayerHand.setAttribute("id", "playerOneHand");
			newHandLocation = document.getElementById("playerOne");
			newHandLocation.appendChild(newPlayerHand);
		}
		//this function needs to have methods of removing DOM elements
		hasHandBeenDealt = false;
	}
};


//Array for the first Deck
const noSuitDeck = [];
//Creates the first Decl
function createDeck (array) {
	for (var i = 2; i < 12; i++) {
		for (var numTimes = 0; numTimes < 4; numTimes++){
			array.push(i);
		}
	}
	for (var i = 0; i < 12; i++) {
		array.push(10);
	}
}
//Calls the first Deck creation method
createDeck(noSuitDeck);
Table.deckOfCards = noSuitDeck;

//Instantiates new objects using object constructor methods
let Player1 = new  Player("Test Player", 1);
let beginningDealer = new Dealer("Smokey Joe", noSuitDeck);
let dealButton = document.getElementById("dealCards");
//logs out properties
console.log(Player1);
console.log(beginningDealer);
console.log(beginningDealer.deckOfCards);
console.log("You made this deck:\n" + noSuitDeck);
beginningDealer.shuffleDeck(noSuitDeck);
beginningDealer.dealCardstoPlayersSelf(Player1);

//testerFunction needs to be replaced by function that clears DOM and arrays
dealButton.addEventListener("click", Table.newHand); 
//can add two functions to event listner, need function to clear table...
dealButton.addEventListener("click", beginningDealer.dealCardsToTable);






