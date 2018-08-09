function countWords(arr) {
    return arr.reduce(function(countItem, word) {
      countItem[word] = ++countItem[word] || 1; 
      return countItem;
    }, {}); 
  }

  module.exports = countWords;