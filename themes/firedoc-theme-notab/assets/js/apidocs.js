/*global YUI, prettyPrint, $*/

YUI().use(
  'history-hash', 'node-screen', 'node-style', 'pjax',
  function(Y) {

    var win = Y.config.win;
    var localStorage = win.localStorage;
    var bdNode = Y.one('#bd');
    var mainNode = document.getElementById('docs-main');
    var pjax, defaultRoute, classTabView, selectedTab;

    // Kill pjax functionality unless serving over HTTP.
    if (!Y.getLocation().protocol.match(/^https?\:/)) {
      Y.Router.html5 = false;
    }

    if (location.hash) {
      $('#docs-main').scrollTo(
        'a.anchor-link[name="'+location.hash.slice(1)+'"]',
        500
      );
    }

    // Create the default route with middleware which enables syntax highlighting
    // on the loaded content.
    defaultRoute = Y.Pjax.defaultRoute.concat(function(req, res, next) {
      prettyPrint();
      bdNode.removeClass('loading');
      if (!location.hash) {
        mainNode.scrollTop = 0;
      }
      next();
    });

    pjax = new Y.Pjax({
      container: '#docs-main',
      contentSelector: '#docs-main > .content',
      linkSelector: '#bd a',
      titleSelector: '#xhr-title',
      navigateOnHash: true,
      root: '/',
      routes: [
        // -- / ----------------------------------------------------------------
        {
          path: '/(index.html)?',
          callbacks: defaultRoute
        },

        // -- /enum/* ----------------------------------------------------------
        {
          path: '/enums/:enum.html*',
          callbacks: [defaultRoute, 'handleClasses']
        },

        // -- /classes/* -------------------------------------------------------
        {
          path: '/classes/:class.html*',
          callbacks: [defaultRoute, 'handleClasses']
        },

        // -- /files/* ---------------------------------------------------------
        {
          path: '/files/*file',
          callbacks: [defaultRoute, 'handleFiles']
        },

        // -- /modules/* -------------------------------------------------------
        {
          path: '/modules/:module.html*',
          callbacks: defaultRoute
        }
      ]
    });

    // -- Utility Functions --------------------------------------------------------

    pjax.checkMemberItemVisibility = function(container) {
      var visibleItems;
      var items$ = $(container).children(".item");
      visibleItems = items$.filter(":visible");
      if (visibleItems.length) {
        $(container).removeClass("no-visible-items");
      } else {
        $(container).addClass("no-visible-items");
      }
    };

    pjax.checkVisibility = function() {
      pjax.checkMemberItemVisibility($(".properties-detail"));
      pjax.checkMemberItemVisibility($(".methods-detail"));
      pjax.checkMemberItemVisibility($(".events-detail"));
    };

    pjax.initLineNumbers = function() {
      var hash = win.location.hash.substring(1),
        container = pjax.get('container'),
        hasLines, node;

      // Add ids for each line number in the file source view.
      container.all('.linenums>li').each(function(lineNode, index) {
        lineNode.set('id', 'l' + (index + 1));
        lineNode.addClass('file-line');
        hasLines = true;
      });

      // Scroll to the desired line.
      if (hasLines && /^l\d+$/.test(hash)) {
        $('#docs-main').scrollTo('#' + hash, 300);
      }
    };

    pjax.initRoot = function() {
      var terminators = /^(?:enums|classes|files|modules)$/,
        parts = pjax._getPathRoot().split('/'),
        root = [],
        i, len, part;
      for (i = 0, len = parts.length; i < len; i += 1) {
        part = parts[i];
        if (part.match(terminators)) {
          // Makes sure the path will end with a "/".
          root.push('');
          break;
        }
        root.push(part);
      }
      pjax.set('root', root.join('/'));
    };

    pjax.initIndexJumpLink = function() {
      // $('body').offscreenTrigger('index-offscreen', '.index', -100);
    };

    pjax.updateVisibility = function() {
      var container = pjax.get('container');
      var _deprecated = Y.one('#api-show-deprecated');
      var _protected = Y.one('#api-show-protected');
      var _private = Y.one('#api-show-private');

      if (_deprecated && _deprecated.get)
        container.toggleClass('show-deprecated', _deprecated.get('checked'));
      if (_protected && _protected.get)
        container.toggleClass('show-protected', _protected.get('checked'));
      if (_private && _private.get)
        container.toggleClass('show-private', _private.get('checked'));

      pjax.checkVisibility();
    };

    // -- Route Handlers -----------------------------------------------------------

    pjax.handleClasses = function(req, res, next) {
      var status = res.ioResponse.status;
      // Handles success and local filesystem XHRs.
      if (!status || (status >= 200 && status < 300)) {}
      pjax.initClassPage();
      next();
    };

    pjax.initClassPage = function() {
      pjax.initIndexJumpLink();
      pjax.updateVisibility();
    };

    pjax.handleFiles = function(req, res, next) {
      var status = res.ioResponse.status;
      // Handles success and local filesystem XHRs.
      if (!status || (status >= 200 && status < 300)) {
        pjax.initLineNumbers();
      }
      next();
    };

    // -- Event Handlers -----------------------------------------------------------

    pjax.onNavigate = function(e) {
      setTimeout(function () {
        $('#docs-main').scrollTo(
          'a.anchor-link[name="'+location.hash.slice(1)+'"]',
          500
        );
      }, 100);
    };

    pjax.onOptionClick = function(e) {
        pjax.updateVisibility();
    };

    pjax.onTabSelectionChange = function(e) {
      var tab = e.newVal;
      var tabId = tab.get('contentBox').getAttribute('href').substring(1);

      selectedTab = tab;

      // If switching from a previous tab (i.e., this is not the default tab),
      // replace the history entry with a hash URL that will cause this tab to
      // be selected if the user navigates away and then returns using the back
      // or forward buttons.
      if (e.prevVal && localStorage) {
        localStorage.setItem('tab_' + pjax.getPath(), tabId);
      }

      pjax.checkVisibility(tab);
    };

    // -- Init ---------------------------------------------------------------------

    pjax.on('navigate', pjax.onNavigate);
    pjax.initRoot();
    pjax.upgrade();
    pjax.initLineNumbers();

    Y.on('domready', function() {
      if ($('.index').length) {
        pjax.initClassPage();
      }
    });
  }
);