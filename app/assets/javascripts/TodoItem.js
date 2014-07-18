var TodoItem = function(task){
    if(task !== ''){
      var deleteButton = '<button type="button" class="btn btn-danger btn-sm">Delete</button>';
      var doneButton = '<button type="button" class="btn btn-success btn-sm">Done</button>';
      return $('<li>').text(task).append(doneButton,deleteButton);
    }
  };
