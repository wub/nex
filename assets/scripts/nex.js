(function() {
  var appcache;

  appcache = window.applicationCache;

  window.addEventListener('load', function() {
    return appcache.addEventListener('updateready', function() {
      if (appcache.status === appcache.UPDATEREADY) {
        return console.log('New version available.');
      }
    }, false);
  }, false);

}).call(this);

//# sourceMappingURL=nex.js.map
