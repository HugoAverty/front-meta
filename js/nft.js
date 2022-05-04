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
    var menu = document.querySelector('.' + entry.target.id);
    if (entry.isIntersecting) {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.classList.remove('activeMenu');
        });
        menu.classList.toggle('activeMenu');
        return
    }
    menu.classList.remove('activeMenu');
}, {
    root: null,
    threshold: 0.0001, // set offset 0.1 means trigger if atleast 10% of element
    // in viewport
});

var menuItem = document.querySelectorAll(".menu-item");
for (const item of menuItem) {
    item.addEventListener('click', function (event) {
        this.classList.add("activeMenu");
    })
}

gsap.to(".bg-blurry", {
    scrollTrigger: {
        scrub: true
    },
    y: 3000,
    ease: "ease"
});

gsap.to(".bg-pattern", {
    scrollTrigger: {
        scrub: true
    },
    y: 2400,
    ease: "ease"
});


window.onload = function () {
    var tlIntro = new TimelineMax();
    tlIntro.to(".block.block-intro.block-intro-nft .bg-block-intro-nft", 30, { scale: 1.3 }, 0);

    observer.observe(elTeam);
    observer.observe(elFAQ);
    observer.observe(eltNFT);
}

elFAQ.querySelectorAll("label").forEach((item) => {
    item.addEventListener('click', (event) => {
        const currentInput = event.currentTarget.parentNode.querySelector('input[name="toggle"]');
        if (currentInput && currentInput.checked) {
            currentInput.checked = false;
            event.preventDefault();
        }
    });
});
