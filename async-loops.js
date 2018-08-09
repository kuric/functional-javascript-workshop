function loadUsers(userIds, load, done) {
    var users = [];
    for (var i = 0; i < userIds.length; i++) {
        load(userIds[id], function(user) {
            users[i] = user;
            if(++i === userIds.length) return done(users);
        });
      users.push(load(userIds[i]));
    }
    return users;
  }

  module.exports = loadUsers;