var path = require('path'),
    rootPath = path.normalize(__dirname + '/..'),
    env = process.env.NODE_ENV || 'development';

var config = {
  development: {
    root: rootPath,
    app: {
      name: 'mvctest'
    },
    port: process.env.PORT || 3001,
    db: 'mongodb://localhost/mvctest-development'
  },

  test: {
    root: rootPath,
    app: {
      name: 'mvctest'
    },
    port: process.env.PORT || 3001,
    db: 'mongodb://localhost/mvctest-test'
  },

  production: {
    root: rootPath,
    app: {
      name: 'mvctest'
    },
    port: process.env.PORT || 3001,
    db: 'mongodb://localhost/mvctest-production'
  }
};

module.exports = config[env];
