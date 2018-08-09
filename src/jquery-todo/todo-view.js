function TodoView(todo) {
  this.todo = todo;
  this.el = null;

  this.appendToList = function(list){
    var self = this;

    var input = "<input value='" + this.todo.name + "'>";
    var buttons = "<button id='edit-todo'>Edit</button><button id='save-todo'>Save</button>";
    var el = $("<li data-id='" + this.todo.id + "'>" + input + buttons + "</li>");
    this.el = el;
    el.appendTo(list);

    el.find('button#edit-todo').click(function() {
      $(this).parent().addClass("editing");
      $(this).parent().find('input').focus();
    });

    el.find('button#save-todo').click(function() {
      var todoModel = new TodoModel('http://localhost:5000/api/book');
      todoModel.save($(self.el).data("id"), {
        name: self.el.find('input').val()
      })
      .then(function(data) {
        $(self.el).removeClass("editing");
        $(self.el).find('input').val(data.name);
      })
      .catch(function(err) {
        console.log(err);
      });
    });
  };
}