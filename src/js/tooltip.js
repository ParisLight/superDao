document.querySelector('.links').addEventListener('click', (e) => {
    if(!e.target.classList.contains('link')) return;

    console.log('хуйхуй');
})