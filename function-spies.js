function Spy(target, method) {
   var result = {count: 0};
   var fn = target[method];
   target[method] = function() {
        result.count++;
        fn.apply(this, arguments);
   }
   return result;
  }

  module.exports = Spy;