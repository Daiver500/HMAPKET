(function () {

// Модальное окно

  const orderButton = document.querySelector(".price__button");
  const closeModalButton = document.querySelector(".modal__close");
  const modalMain = document.querySelector(".modal");

  modalMain.classList.add("hidden");

  const modalEscPressHandler = (evt) => {
    if (evt.key === `Escape`) {
      closeModal();
      evt.preventDefault();
    }
  };

  const windowClickHandler = (evt) => {
    if (evt.target === modalMain) {
      console.log(evt.target);
      closeModal();
    }
  };

  const openModal = () => {
    modalMain.classList.remove("hidden");
    document.body.style.overflow = "hidden";
    closeModalButton.addEventListener("click", closeModalButtonClickHandler);
    modalMain.addEventListener("click", windowClickHandler);
    document.addEventListener("keydown", modalEscPressHandler);
  };

  const closeModal = () => {
    modalMain.classList.add("hidden");
    document.body.style.overflow = "";
    closeModalButton.removeEventListener("click", openModalButtonClickHandler);
    modalMain.removeEventListener("click", windowClickHandler);
    document.removeEventListener("keydown", modalEscPressHandler);
  };

  const openModalButtonClickHandler = () => {
    openModal();
  };

  const closeModalButtonClickHandler = () => {
    closeModal();
  };

  if (orderButton) {
    orderButton.addEventListener("click", openModalButtonClickHandler);
  }


  if (closeModalButton) {
  closeModalButton.addEventListener("click", closeModalButtonClickHandler);
  }
})();
