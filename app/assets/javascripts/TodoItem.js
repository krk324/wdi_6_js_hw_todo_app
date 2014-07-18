var TodoItem = function(task){
    if(task !== ''){
      return $('<li>').text(task);
    }
  };
