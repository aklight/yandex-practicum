import Validator from "./Validator.js";
import { validateLenghtStr, validURL } from "../helpers/validation.js";

class AddCardFormValidator extends Validator {
  constructor() {
    super();
  }

  validateAddCardForm() {
    let isValid = true;

    const formNewName = document.forms.new.elements.name;
    const formErrorCardName = document.querySelector("#error-card-name");
    switch (validateLenghtStr(formNewName.value, 2, 30)) {
      case 0:
        formErrorCardName.textContent = "Это обязательное поле";
        isValid  = false;
        break;
      case 1:
        formErrorCardName.textContent = "";
        break;
      case 2:
        formErrorCardName.textContent = "Должно быть от 2 до 30 символов";
        isValid = false;
        break;
    }

    const formNewLink = document.forms.new.elements.link;
    const formErrorCardLink = document.querySelector("#error-card-link");
    if (validURL(formNewLink.value)) {
      formErrorCardLink.textContent = "";
    } else {
      formErrorCardLink.textContent = "Здесь должна быть ссылка";
      isValid  = false;
    }

    if (isValid) {
      document
        .querySelector("#add-card .popup__button")
        .classList.add("popup__button_enable");
    } else {
      document
        .querySelector("#add-card .popup__button")
        .classList.remove("popup__button_enable");
    }
  }
}

export default AddCardFormValidator;
