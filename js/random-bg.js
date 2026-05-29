(function() {
  var bgImages = [
    '/images/bg/1.png',
    '/images/bg/2.png',
    '/images/bg/3.png',
    '/images/bg/4.png',
    '/images/bg/5.png'
  ];
  var chosen = bgImages[Math.floor(Math.random() * bgImages.length)];
  document.documentElement.style.setProperty('--random-bg', "url('" + chosen + "')");
})();