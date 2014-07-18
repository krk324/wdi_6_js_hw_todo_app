var TodoApp = {
  initialize: function(){
    $('#task-form' ).submit(this.addTask);
  },
  addTask: function(event){
    var task = $('#task-field').val();
    if(task !== ''){
      var newTask = $('<li>').text(task);
      $('#tasks-list').append(newTask);
      $('#task-field').val('');
    }
    event.preventDefault();
  }
};
