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

    wokaCard('gen1');
    wokaCard('gen2');
    wokaCard('gen3');
    wokaCard('gen4');
    wokaCard('gen5');
    wokaCard('gen6');
    wokaCard('gen7');
    wokaCard('gen8');
    wokaCard('gen9');
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

const animatedTextures = [];

function wokaCard(id) {
    //cancel animation WOKA
    if (animatedTextures[id] != undefined) {
        window.cancelAnimationFrame(animatedTextures[id].requestAnimationFrame);
    }

    //create canvas animation
    const image = new Image();
    image.src = `img/NFT/static/${id}.png`;
    const canvas = document.getElementById(id);
    const animatedTexture = {
        image: image,
        canvas: canvas,
        context: canvas.getContext('2d'),
        cycleLoop: [0, 1, 0, 2],
        currentLoopIndex: 0,
        frameCount: 0,
        currentDirection: 0,
        scale: 1,
        width: 512,
        height: 512,
        requestAnimationFrame: null,
    };
    animatedTexture.context.imageSmoothingEnabled = false;
    animatedTexture.requestAnimationFrame = window.requestAnimationFrame(() => {
        stepAnimatedTexture(id);
    });

    animatedTextures[id] = animatedTexture;

    //step animation
    stepAnimatedTexture(id);
}

const stepAnimatedTexture = (id) => {
    const animatedTexture = animatedTextures[id];

    // Go to the next texture each 15 frames
    animatedTexture.frameCount++;
    if (animatedTexture.frameCount < 35) {
        animatedTexture.requestAnimationFrame = window.requestAnimationFrame(() => {
            stepAnimatedTexture(id);
        });
        return;
    }
    animatedTexture.frameCount = 0;

    // Clear the canvas
    clearCanvasAnimatedTexture(id);

    // Draw texture
    animatedTextureDrawFrame(
        id,
        animatedTexture.cycleLoop[animatedTexture.currentLoopIndex],
        animatedTexture.currentDirection,
        0,
        0
    );

    // Check the next texture
    animatedTexture.currentLoopIndex++;
    if (animatedTexture.currentLoopIndex >= animatedTexture.cycleLoop.length) {
        animatedTexture.currentLoopIndex = 0;
        animatedTexture.currentDirection++;
    }

    // Reset the Woka position
    if (animatedTexture.currentDirection >= 4) {
        animatedTexture.currentDirection = 0;
    }

    animatedTexture.requestAnimationFrame = window.requestAnimationFrame(() => {
        stepAnimatedTexture(id)
    });
}

const animatedTextureDrawFrame = (id, frameX, frameY, canvasX, canvasY) => {
    const animatedTexture = animatedTextures[id];
    animatedTexture.context.drawImage(
        animatedTexture.image,
        frameX * animatedTexture.width,
        frameY * animatedTexture.height,
        animatedTexture.width,
        animatedTexture.height,
        canvasX,
        canvasY,
        animatedTexture.scale * animatedTexture.width,
        animatedTexture.scale * animatedTexture.height
    );
}

const clearCanvasAnimatedTexture = (id) => {
    const animatedTexture = animatedTextures[id];
    animatedTexture.context.clearRect(
        0,
        0,
        animatedTexture.canvas.width,
        animatedTexture.canvas.height
    );
}
