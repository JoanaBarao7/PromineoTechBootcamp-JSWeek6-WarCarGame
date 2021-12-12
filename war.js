/*creates a Deck class, that contains a deck array with all elements that a deck has.
 It also goes through the cardFaces, Values and Ranks of those cards to be returned 
into that array. 
It sorts them as well in a random way so they are shuffled.*/
  class Deck {
    constructor(deckArr) {
      this.deckArr = [];
    
      const cardFaces = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
      const suits = ['Clubs', 'Hearts', 'Spades', 'Diamonds' ];
      const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
  
      
      for (let suit in suits) {
        for (let cardFace in cardFaces) {
            this.deckArr.push(new Card(cardFaces[cardFace], suits[suit], values[cardFace]));
          }
      }

     
      
       this.deckArr.sort(() => Math.random() - 0.5);
      
    }
  }
  
  // creates a Card class with the necessary properties related to each card.
  class Card {
    constructor(cardFace, suit, value, ) {   
      this.cardFace = cardFace;  
      this.suit = suit;
      this.value = value;
      
    }
  }
 
  /*creates a Player class, with the necessary properties and creates a method to loop 
  through the 26 cards for each player.*/

  class Player {
    constructor(playerName) {
      this.playerName = playerName;
      this.score = 0;
      this.hand = [];
    }
     
    deal(splitDeck){
      for (let i = 0; i < 26; i++) {
        this.hand.push(splitDeck[i]);
      }
    }
  }
  

  /* creates a function to start the game, splitting the deck in half and to deal to each 
  player.*/

  function start() {
    let deck = new Deck();
    let player1 = new Player('Joana');
    let player2 = new Player('Computer');

    player1.deal(deck.deckArr.slice(0,26));
    player2.deal(deck.deckArr.slice(26));

    /* It compares the players' hands, assigns a point for the hand's winner and logs out
     a description of the cards played and who got the point.*/

    for (let i = 0; i < player1.hand.length; i++) {
      if (player1.hand[i].value > player2.hand[i].value) {
        player1.score += 1;
        console.log(`${player1.hand[i].cardFace} of ${player1.hand[i].suit} > ${player2.hand[i].cardFace} of ${player2.hand[i].suit}, ${player1.playerName} got 1 point!`);
      }
      if (player1.hand[i].value < player2.hand[i].value) {
        player2.score += 1;
        console.log(`${player2.hand[i].cardFace} of ${player2.hand[i].suit} > ${player1.hand[i].cardFace} of ${player1.hand[i].suit}, ${player2.playerName} got 1 point!`);
      }
      else {
        console.log(`${player1.hand[i].cardFace} of ${player1.hand[i].suit} = ${player2.hand[i].cardFace} of ${player2.hand[i].suit}, it\'s a tie, no one got a point! :|`);
      }
    }

    //It compares both scores and logs out the winner and how many points.
    
    if (player1.score > player2.score) {
      console.log(`${player1.playerName} wins with ${player1.score} points!`);
    }
    if (player2.score > player1.score) {
      console.log(`${player2.playerName} wins with ${player2.score} points!`);
    } else {
      console.log(`No one won!! It\'s a tie!!`)
    }
  }

  start();