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

// GSAP

gsap.from("#page2-top-left img", {
    y: 20,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page2-top-left img",
        start: "-30% center",
        end: "top center",
        // markers: true,
        scrub: 2,
    },
});

gsap.from("#page2-top-right img", {
    y: 30,
    opacity: 0,
    duration: .5,
    scrollTrigger: {
        trigger: "#page2-top-right img",
        start: "top center",
        // markers: true,
    },
});

gsap.from("#page2-center-right img", {
    y: 20,
    opacity: 0,
    duration: .5,
    scrollTrigger: {
        trigger: "#page2-center-left-top",
        start: "10% center",
        // markers: true,
    },
});

gsap.from("#page2-bottom", {
    opacity: 0,
    duration: .7,
    scrollTrigger: {
        trigger: "#page2-bottom",
        start: "top center",
        // markers: true,
    },
});

const page3Heading = document.querySelector("#page3>h1");
page3HeadingContent = "UPDATES";
for (let i = 0; i<page3HeadingContent.length; i++){
    const span = document.createElement("span");
    span.innerText = page3HeadingContent[i];
    page3Heading.appendChild(span);
}


gsap.from("#page3>h1 span", {
    y: 40,
    opacity: 0,
    duration: .2,
    stagger: 0.05,
    scrollTrigger: {
        trigger: "#page2-bottom",
        start: "center+=100px center",
        // markers: true,
    },
})

gsap.from("#page4-left img", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page3",
        start: "center+=250px center",
        // markers: true,
    },
});

gsap.from("#page4-right img", {
    opacity: 0,
    duration: 1,
    delay: .3,
    scrollTrigger: {
        trigger: "#page3",
        start: "center+=250px center",
        // markers: true,
    },
});

gsap.from("#page5-center img", {
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#page5",
        start: "top center",
        // markers: true,
    },
});

gsap.from("#page5-right img", {
    opacity: 0,
    duration: 1,
    delay: .5,
    scrollTrigger: {
        trigger: "#page5",
        start: "top center",
        // markers: true,
    },
});