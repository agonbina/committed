/**
 * Module dependencies
 */

var Parse = require('parse').Parse;

/**
 * User Entity
 */

var User = Parse.User.extend({
    validation: {
        email: {
            required: true,
            pattern: 'email',
            msg: 'No e-mail, no fun :)'
        },
        password: {
            required: true,
            msg: 'Come on, no password? :('
        }
    }
});

/**
 * App Handlers for the User entity
 */

var API = {
    getUserEntity: function (userId) {
        var user = new User({id: userId});
        return user.fetch();
    }
};

module.exports = function (CommittedApp) {

    CommittedApp.reqres.setHandlers({
        'user:entity': function () {
            return API.getUserEntity();
        },

        'user:entity:new': function () {
            return new User();
        }
    });

    return User;
};