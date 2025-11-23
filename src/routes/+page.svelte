<script lang="ts">
	import Todo from '$lib/Todo.svelte';
	import AddTodo from '$lib/addTodo.svelte';
	import LauncherBlock from '../components/LauncherBlock.svelte';
	import { LAUNCHER_CONST } from '../const/index.ts';
	import { todos, removeTodo } from '../store/todos.svelte.ts';
	import type { ITodo } from '../store/todos.svelte.ts';

	const { LAUNCHER_STEPS_DATA } = LAUNCHER_CONST;

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
			Choose A Tier
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

	<LauncherBlock {...LAUNCHER_STEPS_DATA[1]} />
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
