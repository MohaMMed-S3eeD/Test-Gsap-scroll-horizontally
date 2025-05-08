// gsap.to(".box", { y: 100, duration: 2 });

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!
    console.log(ScrollTrigger);

    // gsap h1
    gsap.from("h1", {
        y: 100,
        opacity: 0,
        duration: 1.5,
    });


    let slides = gsap.utils.toArray(".slide");


    let fakeHorizontalScroll = gsap.to(slides, {
        xPercent: -100 * (slides.length - 1),
        duration: 1,
        scrollTrigger: {
            trigger: ".sec2",
            start: "top top",
            scrub: 1.5,
            // markers: true,
            pin: true,
        }
    });
    let slidesSec4 = gsap.utils.toArray(".slideSec4");

    gsap.set(slidesSec4, { xPercent: -100 * (slidesSec4.length - 1) });

    let fakeHorizontalScrollSec4 = gsap.to(slidesSec4, {
        xPercent: 0,
        duration: 1,
        scrollTrigger: {
            trigger: ".sec4",
            start: "top top",
            end: "+=2500",
            scrub: 1,
            // markers: true,
            pin: true,

        }
    });
});




