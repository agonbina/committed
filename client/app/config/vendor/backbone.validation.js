var Backbone = require('backbone');

require('backbone.validation');
_.extend(Backbone.Model.prototype, Backbone.Validation.mixin);

// Customize global form error display
_.extend(Backbone.Validation.callbacks, {
    valid: function ($view, attr, selector) {
        var $field = $view.$('[name=' + attr + ']').parent();
        $field.removeClass('error');

        $field.find('.ui.red.pointing.label').remove();
     },
    invalid: function ($view, attr, error, selector) {
        var $field = $view.$('[name=' + attr + ']').parent();
        $field.addClass('error');

        // Remove older errors if present
        $field.find('.ui.red.pointing.label').remove();

        // Add the error field
        var $error = $('<div></div>')
            .addClass('ui red pointing above label')
            .text(error);
        $field.append($error);
    }
});