const moreBtn = document.querySelector('.info .title .moreBtn');
const main = document.querySelector('.info .title .main');

moreBtn.addEventListener('click', () => {
    moreBtn.classList.toggle('clicked');
    main.classList.toggle('clamp');
});
