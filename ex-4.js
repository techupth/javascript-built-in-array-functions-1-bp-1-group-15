const todos = [
  { topic: "Doing pre-work", completed: true },
  { topic: "Workout", completed: false },
  { topic: "Playing computer games", completed: true },
  { topic: "Relax", completed: false },
  { topic: "Clean the room", completed: true },
];

function getCompletedTodo(todos) {
  // Start coding here
  let completedTodos = [];
  for (let i = 0; i< todos.length; i++){
    if(todos[i].completed==true){
      completedTodos.push(todos[i]);
    }
  }
  return completedTodos;
}

const completedTodos = getCompletedTodo(todos);
console.log(completedTodos);

/* 
	Output:
	[
		{ topic: 'Doing pre-work', completed: true },
	  { topic: 'Playing computer games', completed: true },
	  { topic: 'Clean the room', completed: true }
	]
*/
