import { customAlertBlock } from "./constants.js";

// help alert
export function drawAlert(text) {
    const alert = document.createElement("div");
    alert.classList.add("customAlert__item");
    const textAlert = document.createElement("span");
    textAlert.classList.add("customAlert__text");
    textAlert.append(text);
    alert.append(textAlert);
    customAlertBlock.append(alert);
    return animationAlert(alert);
}

function animationAlert(block) {
    const animation = block.animate([
        {
            opacity: 0, offset: 0
        },
        {
            opacity: 1, offset: 0.3
        },
        {
            opacity: 1, offset: 0.9
        },
        {
            opacity: 0, offset: 1
        }
    ], {
        duration: 2500,
    });

    animation.onfinish = () => {
        block.remove();
    };
}
