<script lang="ts">
	import Todo from '$lib/Todo.svelte';

	import AddTodo from '$lib/addTodo.svelte';
	import WelcomeBlock from '../components/WelcomeBlock.svelte';
	import { todos, removeTodo } from '../store/todos.svelte.ts';
	import type { ITodo } from '../store/todos.svelte.ts';

	async function getTodos() {
		const resp = await fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
		const data: ITodo[] = await resp.json();
		todos.push(...data);
	}
</script>

<div class="wrapper">
	<h2 class="pageTitle">Todo List</h2>

	<AddTodo />

	{#await getTodos()}
		<p>...Loading</p>
	{:then}
		{#if todos.length === 0}
			<p>Empty!</p>
		{:else}
			<div class="todoList">
				{#each todos as todo (todo.id)}
					<Todo {...todo} {removeTodo} />
				{/each}
			</div>
		{/if}
	{:catch error}
		<p>Something went wrong: {error.message}</p>
	{/await}

	<WelcomeBlock />
</div>

<style>
	.wrapper {
		width: 100%;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;

		.todoList {
			display: flex;
			flex-direction: column;
			gap: 10px;
		}
	}
</style>
