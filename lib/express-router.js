// Generated by CoffeeScript 1.10.0
(function() {
  module.exports = (function(_this) {
    return function(app, port, dirname) {
      var routes;
      routes = (require('fs')).readFile('routes', 'utf8', function(err, routesFile) {
        var i, len, line, path, ref, results, route;
        ref = routesFile.split('\n');
        results = [];
        for (i = 0, len = ref.length; i < len; i++) {
          line = ref[i];
          if (!(line.match(/^[A-Z]/))) {
            continue;
          }
          route = line.split(/\s+/);
          path = route[2].split('.');
          results.push(app[route[0].toLowerCase()](route[1], (require(dirname + "/" + path[0] + "/" + path[1]))[path[2]]));
        }
        return results;
      });
      return app.listen(port);
    };
  })(this);

}).call(this);