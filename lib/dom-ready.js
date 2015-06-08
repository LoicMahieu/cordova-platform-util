
var requestAnimationFrame = require('./request-animation-frame');

var readyCallbacks = [];
var isDomReady = document.readyState === 'complete' || document.readyState === 'interactive';

function domReady() {
  isDomReady = true;
  for (var x = 0; x < readyCallbacks.length; x++) {
    requestAnimationFrame(readyCallbacks[x]);
  }
  readyCallbacks = [];
  document.removeEventListener('DOMContentLoaded', domReady);
}
if (!isDomReady) {
  document.addEventListener('DOMContentLoaded', domReady);
}

module.exports = function () {
  if (isDomReady) {
    requestAnimationFrame(cb);
  } else {
    readyCallbacks.push(cb);
  }
};
