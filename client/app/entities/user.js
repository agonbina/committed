var CommittedApp = require('app'),
    Parse = require('parse').Parse;

CommittedApp.module('Entities', function (Entities, CommittedApp, Backbone, Marionette, $, _) {
    Entities.User = Parse.User.extend({
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

    module.exports = Entities.User;
});

