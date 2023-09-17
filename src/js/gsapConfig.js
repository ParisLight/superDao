import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const timeLineStarted = gsap.timeline();

timeLineStarted.fromTo('.started-title', {
  x: -300,
  opacity: 0,
}, {
  x: 0,
  opacity: 1,
  duration: 1
}).fromTo('.started-description', {
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