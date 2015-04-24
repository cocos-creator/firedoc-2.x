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
                    return data.sort(function (a, b) {
                        if (!a.module || !b.module) return 0;
                        return a.module > b.module;
                    }).filter(function (item) {
                        return (item.name.toLowerCase().indexOf(q.toLowerCase()) > -1)
                    }).map(function (item) {
                        return item;
                    });
                };
            }
        }
    }
});

}, '3.4.0', {requires: [
    'autocomplete-base', 'autocomplete-highlighters', 'autocomplete-sources'
]});
