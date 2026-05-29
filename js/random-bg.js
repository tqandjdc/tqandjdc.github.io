(function() {
  var bgList = ['/images/bg/1.png', '/images/bg/2.png', '/images/bg/3.png', '/images/bg/4.png'];
  var idx = Math.floor(Math.random() * bgList.length);
  document.documentElement.style.setProperty('--random-bg', 'url(' + bgList[idx] + ')');
})();
