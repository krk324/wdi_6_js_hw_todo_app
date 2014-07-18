var TodoItem = function(task){
    if(task !== ''){
      var deleteButton = '<button type="button" class="btn btn-danger btn-sm" id ="delete-button">Delete</button>';
      var doneButton = '<button type="button" class="btn btn-success btn-sm" id = "done-button">Done</button>';
      var newtask = $('<li>').text(task).append(doneButton,deleteButton).attr('created-at',TodoItem.prototype.createdAt);
      return newtask;
    }
  };

TodoItem.prototype = {
  createdAt: function(){
  return Date();
  },
  completedAt: function(){
  return Date();
  }
};
