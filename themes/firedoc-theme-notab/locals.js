
var _ = require('underscore');
  
module.exports = function (modules, classes, locals) {
  locals.modules = _.sortBy(modules, 'namespace');
  locals.classes = _.sortBy(classes, 'namespace');
};