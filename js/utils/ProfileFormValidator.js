import Validator from "./Validator.js";
import { validateLenghtStr } from "../helpers/validation.js";

class ProfileFormValidator extends Validator {
  constructor() {
    super();
  }

  validateProfileForm() {
    let isValid  = true;

    const formProfileName = document.forms.profile.elements.name;
    const formErrorProfileName = document.querySelector("#error-profile-name");
    switch (validateLenghtStr(formProfileName.value, 2, 30)) {
      case 0:
        formErrorProfileName.textContent = "Это обязательное поле";
        isValid  = false;
        break;
      case 1:
        formErrorProfileName.textContent = "";
        break;
      case 2:
        formErrorProfileName.textContent = "Должно быть от 2 до 30 символов";
        isValid  = false;
        break;
    }

    const formProfileJob = document.forms.profile.elements.job;
    const formErrorProfileJob = document.querySelector("#error-profile-job");
    switch (validateLenghtStr(formProfileJob.value, 2, 30)) {
      case 0:
        formErrorProfileJob.textContent = "Это обязательное поле";
        isValid  = false;
        break;
      case 1:
        formErrorProfileJob.textContent = "";
        break;
      case 2:
        formErrorProfileJob.textContent = "Должно быть от 2 до 30 символов";
        isValid  = false;
        break;
    }

    if (isValid ) {
      document
        .querySelector("#profile .popup__button")
        .classList.add("popup__button_enable");
    } else {
      document
        .querySelector("#profile .popup__button")
        .classList.remove("popup__button_enable");
    }
  }

}

export default ProfileFormValidator;
