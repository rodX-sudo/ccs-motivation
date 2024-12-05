function makeTextRunWithLightning(elementId) {
    const element = document.getElementById(elementId);
    if (!element) return;

    let text = element.textContent; 
    let index = 0;

    function updateText() {
        element.textContent = text.slice(index) + " " + text.slice(0, index);
        index = (index + 1) % text.length; 
    }

    function lightningEffect() {
        const isFlash = Math.random() < 0.2;
        if (isFlash) {
            element.classList.add("flash");
            setTimeout(() => element.classList.remove("flash"), 100);
        }
    }
    setInterval(() => {
        updateText();
        lightningEffect();
    }, 200);
}

makeTextRunWithLightning("running-text");
