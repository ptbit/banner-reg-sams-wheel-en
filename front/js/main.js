(function init100vh() {
  function setHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }
  setHeight();
  window.addEventListener('resize', setHeight);
})();

window.addEventListener('orientationchange', () => {
  location.reload(true);
});

// padding no-ios
document.addEventListener('DOMContentLoaded', function () {
  let pink = document.querySelector('.pink');
  if (!/iPad|iPhone|iPod|Mac/.test(navigator.userAgent)) {
    console.log('if');
    pink.classList.add('noios-padding');
  }
});
