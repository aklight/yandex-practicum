// Class for cards' storing and rendering

import Card from './Card.js';

class CardList {
  constructor(container, cards) {
    this.container = container;
    this.cards = cards;
  }

  addCard(name, link) {
    this.container.appendChild(new Card(name, link ).create());
  }

  render() {
    this.cards.forEach(({ name, link }) => {
      const card = new Card(name, link);
      this.container.appendChild(card.create());
    });
  }
}

export default CardList;
