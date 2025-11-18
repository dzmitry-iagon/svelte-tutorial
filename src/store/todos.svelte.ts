export interface ITodo {
		userId?: string;
		id: string;
		title: string;
		completed: boolean;
}

export let todos:ITodo[] = $state([
		// { id: 0, title: 'title1', completed: false },
		// { id: 1, title: 'title2', completed: false },
		//   { id: 2, title: 'title3', completed: false }
	]);

export const removeTodo = (id: string) => {
	const todoId = todos.findIndex((todo) => todo.id === id);
	todos.splice(todoId, 1);
};

export const addTodo = (todo:ITodo) => {
  todos.unshift(todo);
};

