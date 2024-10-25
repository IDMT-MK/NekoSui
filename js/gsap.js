gsap.fromTo('.box',
    {
        autoAlpha: 0, 
        y: 20
    },
    {
        autoAlpha: 1,
        stagger: 0.8,
        duration: 1, 
        y: 0,
        scrollTrigger: {
        trigger: '.box',
        start: 'top center',
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