module.exports = function warmup(temperature) {
  let celsius = temperature * 9 / 5 + 32;
  let result;
  return celsius;
  if (celsius === -20) {
    result = 'warm cold';
  } else if (celsius === 0) {
    result = 'warm cool';
  } else if (celsius === 15) {
    result = 'warm medium';
  } else if (celsius === 40) {
    result = 'warm hot';
  } else {
    result = 'temp is :' + celsius;
  }
};
