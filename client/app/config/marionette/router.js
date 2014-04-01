/**
 * Module dependencies
 */

var Marionette = require('backbone.marionette'),
    AppRouter = Marionette.AppRouter,
    _ = require('underscore');

var originalExecute = AppRouter.prototype.execute;

// nop - no operation, a function that does nothing
var nop = function () { };

_.extend(AppRouter.prototype, {

    // Default before filter
    before: nop,

    // Default after filter
    after: nop,

    execute: function (callback, args) {
        var router = this;

        var wrappedCallback = _.bind(function () {
            // If before === function -> Run it for all routes
            // If before === object -> Get middleware for this route
                // If middleware === function, run it for this route
                // If middleware === array, run each middleware serially

            // Run the callback specified for this route if all
            // before middleware completes successfully
            callback.apply(this);

            // Repeat same for after as before

        }, router);

        console.log(router.appRoutes);

        return originalExecute.call(router, wrappedCallback, args);
    }
});

module.exports = AppRouter;