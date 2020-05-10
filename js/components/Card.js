class Card {
  constructor(name, link) {
    this.name = name;
    this.link = link;
  }

  create() {
    const card = document.createElement("div");
    card.classList.add("place-card");

    const image = document.createElement("div");
    image.classList.add("place-card__image");
    image.style.backgroundImage = `url(${this.link})`;
    image.addEventListener("click", this.show);

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("place-card__delete-icon");
    deleteButton.addEventListener("click", this.remove);

    const description = document.createElement("div");
    description.classList.add("place-card__description");

    const title = document.createElement("h3");
    title.classList.add("place-card__name");
    title.textContent = this.name;

    const likeButton = document.createElement("button");
    likeButton.classList.add("place-card__like-icon");
    likeButton.addEventListener("click", this.like);

    card.appendChild(image);
    image.appendChild(deleteButton);
    card.appendChild(description);
    description.appendChild(title);
    description.appendChild(likeButton);

    return card;
  }

  remove(e) {
    const parentNode = e.path[3];
    const cardToRemove = e.path[2];

    parentNode.removeChild(cardToRemove);
  }

  like(e) {
    e.target.classList.toggle("place-card__like-icon_liked");
  }

  show(e) {
    if (e.currentTarget === e.target) {
      const bigSizeImage = document.querySelector("#big-size-image");
      const popupImage = document.querySelector(".popup__image");
      popupImage.src = event.target.style.backgroundImage.slice(5, -2);
      bigSizeImage.classList.toggle("popup_is-opened");
    }
  }
}

export default Card;
