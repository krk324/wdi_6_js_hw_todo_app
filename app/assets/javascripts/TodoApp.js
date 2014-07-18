var TodoApp = {
  initialize: function(){
    $('#task-form').submit(this.createTask);
    $('#tasks-list').on('click', '#delete-button',this.deleteTask);
    $('#tasks-list').on('click', '#done-button',this.doneTask);
    $('#finished-list').on('click', '#delete-button',this.deleteTask);

  },
  createTask: function(event){
    var task = $('#task-field').val();
    if(task !== ''){
      var newTask = TodoItem(task);
      $('#tasks-list').append(newTask);
      $('#task-field').val('');
    }
    event.preventDefault();
  },
  deleteTask: function(event){
    $( this.parentElement ).remove();
    event.preventDefault();
  },
  doneTask: function(event){
    var finished_task = $( this.parentElement ).detach();
    //Add completed date.
    finished_task.attr('completed-at',TodoItem.prototype.createdAt);
    $('#finished-list').append(finished_task);
    event.preventDefault();
  },
  sortAlphabatical: function(event){
    $('#task-menu li').each();
    }
};
