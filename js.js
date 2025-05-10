// gsap.to(".box", { y: 100, duration: 2 });

// use a script tag or an external JS file
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger)
    // gsap code here!
    console.log(ScrollTrigger);

    // gsap h1
    const h1Timeline = gsap.timeline();


    // 1. يدخل (Enter)
    h1Timeline.from("h4", {
        x: -400,
        opacity: 0,
        duration: 1,
        ease: "power2.out"
    });


    // 2. يخرج (Exit)
    h1Timeline.to("h4", {
        x: 400,
        opacity: 0,
        duration: 1,
        ease: "power2.out" // Using the ease from the original exit part
    }, ">"); // Starts after the 'from' (entry) animation completes

    // 3. بعدها يبدا من النص (Then, it starts from the center)
    // Reset position to center and set opacity for the bounce
    h1Timeline.set("h4", {
        x: 0, // Center horizontally
        opacity: 0.5, // Opacity for bouncing, as in the original bounce
        y: 0 // Ensure it starts bouncing from y=0
    }, ">"); // Starts after the exit animation completes

    // 4. ويفضل يتنطط (And keeps bouncing)
    h1Timeline.to("h4", {
        y: 30,
        opacity: 1,
        color: "#064e3b", // emerald-900
        backgroundColor: "#ffffeb", // amber-50 لو عايز تبدأ منه
        duration: 1.5,
        repeat: -1,
        yoyo: true,
        ease: "power1.out"
    }, ">");


    // 5. يتحرك الماوس
    gsap.to(".mouse", {
        y: 5,
        duration: 0.5,
        repeat: -1,
        yoyo: true,
    });

    // 6. تحريك السيكشن 2 
    const sec2Timeline = gsap.timeline({
        scrollTrigger: {
            trigger: ".h2-sec2", // العنصر الذي سيُفعّل الأنيميشن
            start: "top 80%",    // يبدأ الأنيميشن عندما يصل أعلى العنصر إلى 80% من ارتفاع نافذة العرض
            once: true           // يتم تشغيل الأنيميشن مرة واحدة فقط ثم يتم تعطيل الـ ScrollTrigger
        }
    });

    sec2Timeline.from(".h2-sec2", {
        x: -400,
        opacity: 0,
        duration: 1,
        ease: "power2.out",

    });

    sec2Timeline.from(".p1-sec2", {
        x: -420,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
    });
    sec2Timeline.from(".span1-sec2", {

        opacity: 0.3,
        duration: 1,
        ease: "power2.out",
    }, ">");

    sec2Timeline.from(".p2-sec2", {
        y: -20,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
    });

    sec2Timeline.from(".img1-sec2", {
        y: 170,
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
    }, "=");













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