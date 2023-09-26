import { modalSettings } from "./modal.js";
function resultImc() {
  let inputValueWeight = Number(modalSettings.inputWeight.value);
  let inputValueHeight = Number(modalSettings.inputHeight.value / 100);
  if (inputValueHeight == 0 || inputValueWeight == 0) {
    modalSettings.erro.classList.add("open");
  } else {
    modalSettings.erro.classList.remove("open");
    modalSettings.imc =
      inputValueWeight / (inputValueHeight * inputValueHeight);
    let stringP = `Seu IMC é ${modalSettings.imc.toFixed(2)}`;
    modalSettings.result.innerHTML = stringP;
    modalSettings.open();
  }
}
modalSettings.btnResult.addEventListener("click", resultImc);
modalSettings.btnClose.onclick = function () {
  modalSettings.close();
};
modalSettings.inputHeight.addEventListener("input", closeAlert);
modalSettings.inputWeight.addEventListener("input", closeAlert);
function closeAlert() {
  modalSettings.erro.classList.remove("open");
}
function eventKey(event) {
  switch (event.key) {
    case "Escape":
      modalSettings.close();
      break;
    case "Enter":
      resultImc();
      break;
  }
}
window.addEventListener("keydown", eventKey);
