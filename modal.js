export const modalSettings = {
  imc: 0,
  inputWeight: document.querySelector("#weight"),
  inputHeight: document.querySelector("#height"),
  btnResult: document.querySelector("#btnResultHtml"),
  result: document.querySelector("#paragraph"),
  modal: document.querySelector("#screenResult"),
  modalBg: document.querySelector("#wrapperResult"),
  erro: document.querySelector("#screenErro"),
  btnClose: document.querySelector("#btnClose"),
  open() {
    modalSettings.modal.classList.add("open");
    modalSettings.modalBg.classList.add("open");
  },
  close() {
    modalSettings.modal.classList.remove("open");
    modalSettings.modalBg.classList.remove("open");
  },
};
