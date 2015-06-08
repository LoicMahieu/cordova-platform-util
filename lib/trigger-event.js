
module.exports = function (el, type) {
  var event = new CustomEvent(type);
  el.dispatchEvent(event);
  return event;
};
