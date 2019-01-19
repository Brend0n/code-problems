module.exports = function(input) {
  //input =>[1, 2, [3, [4], 5, 6], 7]
  //result => [1, 2, 3, 4, 5, 6, 7]

  let result = [];
  parseArray(input);
  return result;

  function parseArray(array) {
    for (let i = 0; i < array.lenght; i++) {
      if (Array.isArray(array[i])) {
        parseArray(array[i]);
      } else {
        result.push(array[i]);
      }
    }
  }
};
