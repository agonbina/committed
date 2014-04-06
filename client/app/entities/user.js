/**
 * Module dependencies
 */

var Parse = require('parse').Parse,
    CommittedApp = require('app');

CommittedApp.module('Entities', function (Entities, CommittedApp, Backbone, Marionette, $, _) {

    /**
     * User Entity
     */

    var User = Entities.User = Parse.User.extend({

        initialize: function () {
            this.on('change:email', function(user, email) {
                user.set('username', email);
            });
        },

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
        },

        getNewUserEntity: function () {
            return new User();
        }
    };

    CommittedApp.reqres.setHandlers({
        'user:entity': API.getUserEntity,
        'user:entity:new': API.getNewUserEntity
    });

    CommittedApp.on('user:logout', function () {
        User.logOut();
        CommittedApp.trigger('login:show');
    });

    module.exports = Entities.User;
});