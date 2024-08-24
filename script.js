function createCircularText() {
    const paraContent =
        "Follow me and be in touch  Interested in quality design? ";
    const para = document.querySelector("#circ-text");

    window.onload = () => {
        for (let i = 0; i < paraContent.length; i++) {
            const span = document.createElement("span");
            span.innerText = paraContent[i];
            para.appendChild(span);
            span.style.transformOrigin = `0 ${para.offsetWidth / 2}px`;
            // console.log(para.offsetWidth / 2);
            span.style.rotate = `${(360 / paraContent.length) * i}deg`;
        }
    };
}
createCircularText();

(function disableRtCl() {
    const images = document.querySelectorAll("img");
    images.forEach((image) => {
        image.addEventListener("contextmenu", function (e) {
            e.preventDefault();
        });
    });
})();
