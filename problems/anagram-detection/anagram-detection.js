module.exports = function(parent, child) {
  let count = 0;
  for (let i = 0; i < parent.length - child.length + 1; i++) {
    if (checkAnagram(parent.slice(i, i + child.length), child)) {
      count++;
    }
  }
  return count;

  function checkAnagram(str1, str2) {
    let temp = str2.split("");
    for (let char of str1) {
      const index = temp.indexOf(char);
      if (index == -1) {
        return false;
      } else {
        temp.splice(index, 1);
      }
    }
    return true;
  }
};
