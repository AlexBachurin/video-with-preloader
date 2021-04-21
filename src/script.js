//get elems

const btnSwitch = document.querySelector('.video__btn-switch'),
    btnControl = document.querySelector('.video__btn'),
    video = document.querySelector('.video-container');

btnControl.addEventListener('click', (e) => {
    e.preventDefault();
    //all simple if switch not contains pause class, then we pause video and move switcher, if contains we resume video and move switcher in default position
    console.log(e.target)
    if (btnSwitch.classList.contains('pause-video')) {
        video.play();
        btnSwitch.classList.remove('pause-video')
    } else {
        video.pause();
        btnSwitch.classList.add('pause-video')
    }
})

//preloader
//just use load event, so while we fully waiting for page to load, we show our preloader
//once page loaded we hiding it
const preloader = document.querySelector('.preloader');
window.addEventListener('load', () => {
    preloader.style.display = 'none';

})