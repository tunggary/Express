let count = 0;

function getCount() {
  return count;
}

function increase() {
  count++;
}
module.exports.getCount = getCount;
module.exports.increase = increase;
