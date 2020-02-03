var todoList={
  todos:[],
  /***displayTodo:function(){
    //console.log(this.todos)
    if(this.todos.length===0){
      console.log('Your list is empty')
    }
    else{
      console.log('My Todos: ')
      for(var i=0;i<this.todos.length;i++){
        //console.log(this.todos[i].todoname)
        if(this.todos[i].completed===true){
          console.log('(X) ',this.todos[i].todoname)
        }
        else{
          console.log('( ) ',this.todos[i].todoname)
        }
      }
    }
  },***/
  addTodo:function(todoname){
    this.todos.push({
      todoname:todoname,
      completed:false
    })
    //this.displayTodo()
  },
  deleteTodo:function(num){
    this.todos.splice(num,1)
    //this.displayTodo()
  },
  updateTodo:function(num,newTodo){
    this.todos[num].todoname=newTodo
    //this.displayTodo()
  },
  toggleComplete:function(num){
    this.todos[num].completed=!this.todos[num].completed
    //this.displayTodo()
  },
  toggleAllTodo:function(){
    //debugger;
    var numTodos=this.todos.length
    var completedTodos=0;
    for(var i=0;i<numTodos;i++){
      if(this.todos[i].completed===true){
        completedTodos=completedTodos+1
      }
    }
    if(completedTodos===numTodos){
      for(var i=0;i<numTodos;i++){
        this.todos[i].completed=false
      }
    }
    else{
      for(var i=0;i<numTodos;i++){
        this.todos[i].completed=true
      }
    }
    //this.displayTodo()
  }
};

var handlers={
  toggleAll:function(){
    todoList.toggleAllTodo()
    view.displayTodo()
  },
  addTodo:function(){
    var addTodoname=document.getElementById('addTodonameInput')
    todoList.addTodo(addTodoname.value)
    addTodoname.value=''
    view.displayTodo()
  },
  updateTodo:function(){
    var updateTodonum=document.getElementById('updateTodonumInput')
    var updateTodoname=document.getElementById('updateTodonameInput')
    todoList.updateTodo(updateTodonum.valueAsNumber,updateTodoname.value)
    updateTodonum.value=''
    updateTodoname.value=''
    view.displayTodo()
  },
  deleteTodo:function(){
    var deleteTodonum=document.getElementById('deleteTodonumInput')
    todoList.deleteTodo(deleteTodonum.valueAsNumber)
    deleteTodonum.valueAsNumber=''
    view.displayTodo()
  },
  toggleComplete:function(){
    var toggleComplete=document.getElementById('toggleCompleteInput')
    todoList.toggleComplete(toggleComplete.valueAsNumber)
    toggleComplete.value=''
    view.displayTodo()
  }
}

var view={
  displayTodo:function(){
    var todoUl=document.querySelector('Ul')
    todoUl.innerHTML=''
    for(var i=0;i<todoList.todos.length;i++){
      var todoLi=document.createElement('Li')
      var todo=todoList.todos[i]
      var todoprint=''
      if(todoList.todos[i].completed===true){
        todoPrint='(X) '+todo.todoname
      }
      else{
        todoPrint='( ) '+todo.todoname
      }
      
      todoLi.textContent=todoPrint
      todoUl.appendChild(todoLi)
    }
  },
  createDeleteButton:function(){
    
  }
}









