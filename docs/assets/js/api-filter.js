YUI.add('api-filter', function (Y) {

Y.APIFilter = Y.Base.create('apiFilter', Y.Base, [Y.AutoCompleteBase], {
    // -- Initializer ----------------------------------------------------------
    initializer: function () {
        this._bindUIACBase();
        this._syncUIACBase();
    },
    getDisplayName: function(name) {
        Y.each(Y.YUIDoc.meta.allModules, function(i) {
            if (i.name === name && i.displayName) {
                name = i.displayName;
            }
        });
        return name;
    }

}, {
    // -- Attributes -----------------------------------------------------------
    ATTRS: {
        resultHighlighter: {
            value: 'phraseMatch'
        },

        // May be set to "enums", "classes" or "modules".
        queryType: {
            value: 'enums'
        },

        source: {
            valueFn: function() {
                var self = this;
                return function(q) {
                    var type = self.get('queryType');
                    var data = Y.YUIDoc.meta[type];
                    var classifiedData = {};

                    // optimize for empty array, directly returns []
                    if (!data.length) return [];

                    data.filter(function (item) {
                        return (item.name.toLowerCase().indexOf(q.toLowerCase()) > -1)
                    }).forEach(function (item) {
                        // generate classifiedData via item.module
                        if (!classifiedData[item.module])
                            classifiedData[item.module] = [];
                        classifiedData[item.module].push(item);
                    });
                    return Object.keys(classifiedData).sort(function (prev, next) {
                        return prev > next;
                    }).map(function (key) {
                        return classifiedData[key];
                    }).reduce(function (prev, next) {
                        return prev.concat(next);
                    });
                };
            }
        }
    }
});

}, '3.4.0', {requires: [
    'autocomplete-base', 'autocomplete-highlighters', 'autocomplete-sources'
]});
