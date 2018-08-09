function repeat(operation, num) {
    if(num <= 0) return;
    for (var i = 1; i <= num; i++) {
        operation();
    }
  }
  // Do not remove the line below
  module.exports = repeat;

// official solution
// function repeat(operation, num) {
//     if (num <= 0) return
//     operation()
//     return repeat(operation, --num)
//   }

//   module.exports = repeat