
const middle = function(array) {
  const num = [];
  if (array.length >= 3) {
    if (array.length % 2 === 1) {
      num.push((Number(array[Math.round(array.length / 2) - 1])));
    } else {
      num.push(array[(array.length / 2) - 1]);
      num.push(array[(array.length / 2)]);
    }
    return num;
  } else {
    return num;
  }
};

module.exports = middle;

