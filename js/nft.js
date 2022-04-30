gsap.registerPlugin(ScrollTrigger);
gsap.to('progress', {
    value: 100,
    ease: 'none',
    scrollTrigger: { scrub: 0.3 }
});

const eltNFT = document.querySelector('#elt-nft')
const elFAQ = document.querySelector('#elt-faq')
const elTeam = document.querySelector('#elt-team')
const observer = new window.IntersectionObserver(([entry]) => {
    var menu = document.querySelector('.'+entry.target.id);
    if (entry.isIntersecting) {
        console.log('ENTER')
        console.log(entry.target.id);
        menu.classList.toggle('activeMenu');
        return
    }
    menu.classList.remove('activeMenu');
    console.log('LEAVE')
}, {
    root: null,
    threshold: 0.1, // set offset 0.1 means trigger if atleast 10% of element in viewport
});

observer.observe(elTeam);
observer.observe(elFAQ);
observer.observe(eltNFT);