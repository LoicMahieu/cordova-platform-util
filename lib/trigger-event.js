
module.exports = function (el, type) {
  var event = document.createEvent(type);
  el.dispatchEvent(event);
  return event;
};
