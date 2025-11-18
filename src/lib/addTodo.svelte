<script lang="ts">
	import { addTodo } from '../store/todos.svelte.ts';

	let title = $state('');

	const onsubmit = (event: SubmitEvent) => {
		event.preventDefault();

		if (!title) return;

		addTodo({ title, completed: false, id: String(Date.now()) });

		title = '';
	};
</script>

<form {onsubmit} class="addTodoForm">
	<input placeholder="add todo" bind:value={title} />

	<button disabled={!title}>Add todo</button>
</form>

<div class="wrapper">
	<div></div>
	<p></p>
</div>

<style>
	.addTodoForm {
		display: flex;
		width: 400px;
		justify-content: space-around;
		margin: 10px 0;
	}
</style>
