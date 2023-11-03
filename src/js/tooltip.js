// document.querySelector('.links').addEventListener('click', (e) => {

//     const tooltip = document.querySelector('.tooltip');

//     if(!e.target.classList.contains('link') || !tooltip) return;

//     const targetLink = e.target;

//     const currentItemCoords = targetLink.getBoundingClientRect();
//     const tooltipRect = tooltip.getBoundingClientRect();

//     const coordsTooltipTop = currentItemCoords.top - tooltip.clientHeight;
//     const coordsTooltipLeft = currentItemCoords.left + currentItemCoords.width / 2 - tooltipRect.width / 2;
//     // TODO: fix that or use library
//     tooltip.style.top  = coordsTooltipTop + 'px';
//     tooltip.style.left  = coordsTooltipLeft + 'px';
//     tooltip.style.display = 'block';
// })