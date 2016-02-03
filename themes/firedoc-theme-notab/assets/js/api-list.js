'use strict';

$(document).ready(function () {

  var movedItems = [];
  var itemToSort = [];
  var itemsCont = $('#api-items');
  var itemsList = $('#api-items>li>.api-list-item-clickable');
  itemsList.on(
    'click',
    function onclick () {
      $(this).parent().find('.members-list').toggleClass('hidden');
    }
  );

  var inputing = false;
  var searchBox = $('#api-tabview-filter>input[type=search]');
  searchBox.on(
    'input',
    function (e) {
      clearTimeout(inputing);
      inputing = setTimeout(function () {
        filter($(this).val());
      }.bind(this), 300);
    }
  );

  $(document).on('keyup', function (e) {
    // shortcut 's' -> search
    if (e.keyCode === 83) {
      searchBox.focus();
    }
  });

  var records = [];
  itemsCont.find('.module').each(
    getAppendor('module')
  );
  itemsCont.find('.class').each(
    getAppendor('class')
  );
  itemsCont.find('.enum').each(
    getAppendor('enum')
  );

  var firstRecords = records.filter(function (r) {
    return r.type !== 'member';
  });

  function getAppendor (type) {
    return function () {
      var $this = $(this);
      var name = $this.text().trim().replace(/\n\r/, '');
      records.push(
        appendMmebers({
          'this': $this.parent().parent(),
          'ns': name.toLowerCase(),
          'name': name,
          'type': type
        })
      );
    };
  }

  function appendMmebers (parent) {
    $(parent.this).find('.members>li').each(function () {
      var $this = $(this);
      var $ul = $this.parent('ul');
      var $h3 = $ul.prev('h3');
      var name = $this.find('.name').text().trim().replace(/\n\r/, '');
      var namespace = [parent.name, name].join('.').toLowerCase();
      records.push({
        'parent': parent,
        'ns': namespace,
        'name': name,
        'type': 'member',
        'this': $this,
        '$ul': $ul,
        '$h3': $h3
      });
    });
    return parent;
  }

  function clearMoved () {
    if (itemToSort.length > 0) {
      itemToSort = [];
    }
    var reset = movedItems.shift();
    if (reset) {
      reset();
      clearMoved();
    }
  }

  function filter (keyword) {
    clearMoved();
    records.filter(function (r) {
      r.this.show().addClass('visible');
      if (r.ns.search(keyword.toLowerCase()) === -1) {
        r.this.hide().removeClass('visible');
      } else {
        if (keyword) {
          if (r.type !== 'member') {
            r.this.find('.members-list').removeClass('hidden');
            itemToSort.push(r);
            // itemsCont.prepend(r.this);
            // set the reset stuff
            var index = firstRecords.indexOf(r);
            movedItems.push(function reset () {
              if (index > 0)
                r.this.insertAfter(firstRecords[index - 1].this);
              else
                r.this.insertBefore(firstRecords[0].this);
            });
          } else {
            r.parent.this.find('.members-list').removeClass('hidden');
          }
        } else {
          r.this.find('.members-list').addClass('hidden');
        }
        return true;
      }
    }).map(function (r) {
      if (r.parent) {
        r.parent.this.show();
      }
      return r;
    });

    var keywordL = keyword.toLowerCase();
    var result = itemToSort.sort(function(a, b) {
      var idxA = a.ns.indexOf(keywordL);
      var idxB = b.ns.indexOf(keywordL);
      if (idxA > idxB) {
        return 1;
      } else if (idxA < idxB) {
        return -1;
      } else {
        if (a.name.toLowerCase() === keywordL) {
          return -1;
        }
        if (b.name.toLowerCase() === keywordL) {
          return 1;
        }
        if (a.name > b.name) {
          return 1;
        } else if (a.name < b.name) {
          return -1;
        }
        return 0;
      }
    }).map(function (r) {
      return r.this;
    });

    itemsCont.prepend(result);
  }

});