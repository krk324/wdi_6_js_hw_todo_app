var TodoApp = {
  initialize: function(){
    $('#task-form').submit(this.createTask);
    $('#tasks-list').on('click', '#delete-button',this.deleteTask);
  },
  createTask: function(event){
    var task = $('#task-field').val();
    if(task !== ''){
      var newTask = TodoItem(task);
      $('#tasks-list').append(newTask);

      i = $( "#tasks-list li" ).index($('#tasks-list li').last());

      $( "#tasks-list li" ).last().attr('data-id',i);
      $('#task-field').val('');
    }
    event.preventDefault();
  },
  deleteTask: function(event){
    $( this.parentElement ).remove();
    event.preventDefault();
  }
};
