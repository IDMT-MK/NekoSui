gsap.fromTo('.box',
    {
        autoAlpha: 0, 
        y: 0
    },
    {
        autoAlpha: 1,
        stagger: 0.8,
        duration: 1, 
        y: 0,
        scrollTrigger: {
        trigger: '.box',
        start: 'top center',
        markers: false,
    }
});
gsap.fromTo('.box2',
    {
        autoAlpha: 0, 
        y: 20
    },
    {
        autoAlpha: 1,
        stagger: 0.5,
        duration: 1, 
        y: 0,
        scrollTrigger: {
        trigger: '.box2',
        start: 'top center',
        markers: false,
    }
});
gsap.fromTo('.box3',
    {
        autoAlpha: 0, 
        y: 0
    },
    {
        autoAlpha: 1,
        stagger: 0.8,
        duration: 1, 
        y: 0,
        scrollTrigger: {
        trigger: '.box3',
        start: 'top center',
        markers: false,
    }
});
gsap.fromTo('.box4',
    {
        autoAlpha: 0, 
        y: 0
    },
    {
        autoAlpha: 1,
        stagger: 0.8,
        duration: 1, 
        y: 0,
        scrollTrigger: {
        trigger: '.box4',
        start: 'top center',
        markers: false,
    }
});
gsap.fromTo('.box5',
    {
        autoAlpha: 0, 
        x: -200,
    },
    {
        autoAlpha: 1,
        stagger: 0.5,
        duration: 1, 
        x: 0,
        scrollTrigger: {
        trigger: '#plan',
        start: 'top center',
        markers: false,
    }
});
gsap.fromTo('.box6',
    {
        autoAlpha: 0, 
        x: 200,
    },
    {
        autoAlpha: 1,
        stagger: 0.1,
        duration: 1, 
        delay: 1,
        x: 0,
        scrollTrigger: {
        trigger: '#feature',
        start: 'top bottom',
        markers: false,
    }
});
gsap.fromTo('.box7',
    {
        autoAlpha: 0, 
        y: 20
    },
    {
        autoAlpha: 1,
        stagger: 0.5,
        duration: 0.5, 
        y: 0,
        scrollTrigger: {
        trigger: '#about',
        start: 'top center',
        markers: false,
    }
});
gsap.fromTo('.box8',
    {
        autoAlpha: 0, 
        y: 20
    },
    {
        autoAlpha: 1,
        stagger: 0.5,
        duration: 1, 
        delay: 1.5,
        y: 0,
        scrollTrigger: {
        trigger: '#about',
        start: 'top center',
        markers: false,
    }
});
gsap.fromTo('.box9',
    {
        autoAlpha: 0, 
        y: 20
    },
    {
        autoAlpha: 1,
        stagger: 0.5,
        duration: 1, 
        delay: 3,
        y: 0,
        scrollTrigger: {
        trigger: '#about',
        start: 'top center',
        markers: false,
    }
});
gsap.fromTo('.about-box h4',
    {
        autoAlpha: 0, 
        y: 20
    },
    {
        autoAlpha: 1,
        stagger: 0.5,
        duration: 1, 
        y: 0,
        scrollTrigger: {
        trigger: '.about-box',
        start: 'top center',
        markers: false,
    }
});
gsap.fromTo('.concept-img img',
    {
        autoAlpha: 0, 
        scale: 2,
    },
    {
        autoAlpha: 1,
        duration: 1.5, 
        scale: 1,
        ease: "power1.out",
        scrollTrigger: {
        trigger: '.concept',
        start: 'top center',
        markers: false,
    }
});
const img_hover = gsap.timeline({paused: true})
.to(".concept-img img",{
    scale: 1.15, 
    duration: 1,
    ease: "power2.out",
})

gsap.fromTo('.pirammido',
    {
        autoAlpha: 0, 
        y: 20
    },
    {
        autoAlpha: 1,
        stagger: 0.5,
        duration: 1, 
        y: 0,
        scrollTrigger: {
        trigger: '.pirammido',
        start: 'top center',
        markers: false,
    }
});
gsap.fromTo('.img-conteiner',
    {
        autoAlpha: 0, 
        y: 20
    },
    {
        autoAlpha: 1,
        stagger: 0.2,
        duration: 1, 
        y: 0,
        scrollTrigger: {
        trigger: '.osusume-img',
        start: 'top center',
        markers: false,
    }
});
gsap.fromTo('.girl',
    {
        autoAlpha: 0, 
        x: -200,
    },
    {
        autoAlpha: 1,
        stagger: 0.4,
        duration: 1, 
        x: 0,
        scrollTrigger: {
        trigger: '#costomer',
        start: 'top center',
        markers: false,
    }
});
gsap.fromTo('.girl2',
    {
        autoAlpha: 0, 
        x: 200,
    },
    {
        autoAlpha: 1,
        duration: 1, 
        x: 0,
        scrollTrigger: {
        trigger: '#costomer',
        start: 'top center',
        markers: false,
    }
});



const paragraph = document.querySelector(".js-text");
const textContent = paragraph.textContent;
const newTextContent = [...textContent]
    .map((char) => `<span>${char}</span>`)
    .join("");
paragraph.innerHTML = newTextContent;
gsap.fromTo(
    ".js-text span",
    {
    autoAlpha: 0,
    y: 20,
    },
    {
    autoAlpha: 1,
    y: 0,
    delay: 1,
    stagger: 0.03,
    scrollTrigger: {
        trigger: ".js-text span", 
        start: "top center", 
        markers: false,
    },
    }
);
