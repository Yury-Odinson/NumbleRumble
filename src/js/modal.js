import { modalCover, modal, modalCounter, modalButton } from "./constants.js";
import { newGame } from "./index.js";

// open modal. n - counter of the attempt
export function winnerModal(n) {
    modalCover.style.display = "block";
    modal.style.display = "block";
    modalCounter.textContent = n;
}

// close modal without start new game
modalCover.onclick = () => {
    modalCover.style.display = "none";
    modal.style.display = "none";
}

// close modal window and start new game
modalButton.onclick = () => newGame();
