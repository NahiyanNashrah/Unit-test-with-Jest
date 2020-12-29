const checkAnagram = (str1, str2) => {
  return format(str1) === format(str2);
}

function format(str) {
  return str.toLowerCase().split('').sort().join('');
}

module.exports = checkAnagram;