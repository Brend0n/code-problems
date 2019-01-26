module.exports = function(bst) {
  let result = true;
  let stack = [];

  recurse(bst);

  function recurse(node) {
    if (stack.includes(node.value)) {
      result = false;
    }
    stack.push(node.value);
    if (node.right && node.value >= node.right.value) {
      result = false;
    }
    if (node.left && node.value <= node.left.value) {
      result = false;
    }
    if (node.left) {
      recurse(node.left);
    }
    if (node.right) {
      recurse(node.right);
    }
  }
  return result;
};
