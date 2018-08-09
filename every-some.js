function checkUsersValid(goodUsers) {
    return function(submittedUsers) {
      return submittedUsers.every(function(checkedUser) {
          return goodUsers.some(function(goodUser) {
              return goodUser.id === checkedUser.id;
          });
      });
    };
  }
  
  module.exports = checkUsersValid;