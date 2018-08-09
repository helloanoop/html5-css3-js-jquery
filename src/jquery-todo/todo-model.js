function TodoModel(url) {
  this.url = url;

  this.getAllTodos = function() {
    var self = this;
    return new Promise(function(resolve, reject) {
      $.get(self.url, function(data) {
        return resolve(data.data);
      }).fail(function(err) {
        return reject(err);
      });
    });
  }

  this.create = function(params) {
    var self = this;
    return new Promise(function(resolve, reject) {
      $.ajax({
        url: self.url,
        method: "POST",
        data: {
          name: params.name
        }
      })
      .done(function(data) {
        return resolve(data);
      })
      .fail(function(err) {
        return reject(err);
      });
    });
  }
}