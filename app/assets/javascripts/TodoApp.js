var TodoApp = {
  initialize: function(){
    $('#task-form' ).submit(this.createTask);
  },
  createTask: function(event){
    var task = $('#task-field').val();
    if(task !== ''){
      var newTask = TodoItem(task);
      $('#tasks-list').append(newTask);
      $('#task-field').val('');
    }
    event.preventDefault();
  }
};
