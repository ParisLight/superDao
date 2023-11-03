import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timeLineStarted = gsap.timeline();

timeLineStarted.fromTo('.header', {
    x: -100,
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    duration: 1,  
    ease: "power3.out",
}).fromTo('.started__title', {
  x: -300,
  opacity: 0,
}, {
  x: 0,
  opacity: 1,
  duration: 1
}).fromTo('.started__description', {
    x: 100,
    opacity: 0
}, {
    x: 0,
    opacity: 1,
    duration: 1
}).fromTo('.started__yellow-btn', {
    y: 30,
    opacity: 0
}, {
    y: 0,
    opacity: 1
})

gsap.from('.designed__list a:nth-child(odd)', {
    x: -200,
    opacity: 0, 
    duration: 1, 
    stagger: 0.2, 
    scrollTrigger: {
       trigger: '.designed',
       start: '20% bottom',
       scrub: true,
       end: '80% center'
    },
});

gsap.from('.ready__project-buttons .color-btn', {
    opacity: 0,
    scale: 0,
    stagger: 0.2,
    scrollTrigger: {
        trigger: '.ready',
        start: '30% bottom'
    }
})

gsap.from('.designed__list a:nth-child(even)', {
    x: 200, 
    opacity: 0, 
    duration: 0.7, 
    stagger: 0.2, 
    scrollTrigger: {
       trigger: '.designed',
       start: '20% bottom',
       end: '80% center',
       scrub: true,
    },
});