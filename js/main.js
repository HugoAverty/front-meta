/*
document.addEventListener('click', function (event) {

    // If the clicked element doesn't have the right selector, bail
    if (!event.target.matches('.nav-item')) return;

    // Don't follow the link
    event.preventDefault();

    // Log the clicked element in the console
    console.log(event.target);

}, false);
*/
gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { scrub: 0.3 }
});

gsap.to(".lets-create", {
    y: '-200px',
    opacity: '0',
    ease: "power3.out"
});
gsap.to(".services", {
    y: '-200px',
    opacity: '0',
    ease: "power3.out"
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".services",
        start: 200,
        //pin: true
    }
})
.to(".lets-create",  { opacity: '1', y: '0px' }, 0)
.to(".services",  {stagger: 0.2, opacity: '1', y: '0px' }, 0);
gsap.to(".reinforcement", {
    y: '-200px',
    opacity: '0',
    scale: '0',
    ease: "power3.out"
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".reinforcement",
        start: "top bottom +200",
        //pin: true
    }
})
.to(".reinforcement",  {stagger: 1,  opacity: '1', scale: '1', y: '0px' }, 0);

gsap.to(".step-line", {
    height: '0px',
    ease: "power3.out"
});
gsap.to(".step-circle", {
    opacity: '0',
    ease: "power3.out"
});
gsap.to(".step-date", {
    y: '-20px',
    opacity: '0',
    ease: "power3.out"
});
gsap.to(".step-content", {
    y: '-20px',
    opacity: '0',
    ease: "power3.out"
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".roadmap",
        end: -300
        //pin: true
    }
})
.to(".step-line",  {stagger: 0.5, height: "100%" }, 0)
.to(".step-circle",  {stagger: 0.5, opacity: "1"}, .2)
.to(".step-date",  {stagger: 0.5, opacity: "1", y: '0px' }, 0)
.to(".step-content",  {stagger: 0.5, opacity: "1", y: '0px' }, 0);

gsap.to(".team-member", {
    y: '-20px',
    opacity: '0',
    scale: '0',
    ease: "power3.out"
});

gsap.timeline({
    scrollTrigger: {
        trigger: ".team-member",
        start: "top bottom +20",
        scrub: true
        //pin: true
    }
})
.to(".team-member", {stagger: 0.2, scale: '1', opacity: "1"}, 0);

gsap.to(".parallax-bg", {
    scrollTrigger: {
        scrub: true
    },
    y: (i, target) => -ScrollTrigger.maxScroll(window) * target.dataset.speed,
    ease: "none"
});

