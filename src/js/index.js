import './gsapConfig';
import './tooltip.js'

document.addEventListener('DOMContentLoaded', (e) => {
    // scroll to ready section
    if(document.querySelector('.double-arrows')){
        document.querySelector('.double-arrows').addEventListener('click', (e) => {
            const topCoordsRect = document.querySelector('.ready').getBoundingClientRect();
            window.scrollTo({
                top: topCoordsRect.top + window.scrollY,
                behavior: 'smooth'
            })
        })
    }

}) 