function TodoView(todo) {
  this.todo = todo;

  this.appendToList = function(list){
    var input = "<input value='" + this.todo.name + "'>";
    var el = $("<li data-id='" + this.todo.id + "'>" + input + "<button>Edit</button></li>");
    el.appendTo(list);

    el.find('button').click(function() {
      console.log($(this).parent().data("id"));
    });
  };
}