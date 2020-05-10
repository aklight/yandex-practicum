import initialCards from "../misc/mocks.js";

import CardList from "./CardList.js";
import Popup from "./Popup.js";

import { AddCardFormValidator, ProfileFormValidator } from "../utils/index.js";

const { validateAddCardForm } = new AddCardFormValidator();
const { validateProfileForm } = new ProfileFormValidator();

class App {
  _initInputValidation() {
    document.forms.profile.elements.name.addEventListener(
      "input",
      validateProfileForm
    );
    document.forms.profile.elements.job.addEventListener(
      "input",
      validateProfileForm
    );
    document.forms.new.elements.name.addEventListener(
      "input",
      validateAddCardForm
    );
    document.forms.new.elements.link.addEventListener(
      "input",
      validateAddCardForm
    );
  }

  _renderBigSizeImage() {
    const bigSizeImage = document.querySelector("#big-size-image");
    const crossButtonBigImage = document.querySelector(
      "#big-size-image .popup__close"
    );
    crossButtonBigImage.addEventListener("click", toggleBigSizeImage);

    function toggleBigSizeImage() {
      bigSizeImage.classList.toggle("popup_is-opened");
    }
  }

  _renderPopups(cardList) {
    const addCardEl = document.querySelector("#add-card");
    const addCardPopup = new Popup(addCardEl, validateAddCardForm);

    const editProfileEl = document.querySelector("#profile");
    const editProfilePopup = new Popup(editProfileEl, validateProfileForm);

    const button = document.querySelector(".user-info__button");
    button.addEventListener("click", addCardPopup.open);

    const crossButton = document.querySelector("#add-card .popup__close");
    crossButton.addEventListener("click", addCardPopup.close);

    const buttonEdit = document.querySelector(".button.user-info__edit");
    buttonEdit.addEventListener("click", editProfilePopup.open);

    const crossButtonEdit = document.querySelector("#profile .popup__close");
    crossButtonEdit.addEventListener("click", editProfilePopup.close);

    this._initInputValidation();

    const userInfoName = document.querySelector(".user-info__name");
    const userInfoJob = document.querySelector(".user-info__job");

    document.forms.profile.elements.name.value = userInfoName.textContent;
    document.forms.profile.elements.job.value = userInfoJob.textContent;

    document.forms.new.addEventListener("submit", submitFormAdd);
    document.forms.profile.addEventListener("submit", submitFormProfile);

    function submitFormProfile(event) {
      event.preventDefault();
      if (
        !document
          .querySelector("#profile .popup__button")
          .classList.contains("popup__button_enable")
      ) {
        return;
      }

      userInfoName.textContent = document.forms.profile.elements.name.value;
      userInfoJob.textContent = document.forms.profile.elements.job.value;
      editProfilePopup.close();
    }

    function submitFormAdd(event) {
      const form = event.currentTarget;
      event.preventDefault();

      if (
        !document
          .querySelector("#add-card .popup__button")
          .classList.contains("popup__button_enable")
      ) {
        return;
      }
      cardList.addCard(form.elements.name.value, form.elements.link.value);
      addCardPopup.close();

      form.reset();
    }
  }

  init() {
    const cards = document.querySelector(".places-list");
    const cardList = new CardList(cards, initialCards);

    this._renderPopups(cardList);
    cardList.render();

    this._renderBigSizeImage();
  }
}

export default App;
