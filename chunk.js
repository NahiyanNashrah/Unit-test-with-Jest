const chunk = (arr, len) => {

  let i = 0;
  let chuckedArr = [];
  while(i < arr.length) {
    chuckedArr.push(arr.slice(i, i+len));
    i += len; 
  }
  return chuckedArr;
}
module.exports = chunk;