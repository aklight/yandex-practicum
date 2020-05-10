class Popup {
  constructor(popup, validation) {
    this.popup = popup;
    this.validation = validation;
  }

  open = () => {
    if (this.validation) {
      this.validation();
    }
    this.popup.classList.add("popup_is-opened");
  };

  close = () => {
    this.popup.classList.remove("popup_is-opened");
  };
}

export default Popup;
