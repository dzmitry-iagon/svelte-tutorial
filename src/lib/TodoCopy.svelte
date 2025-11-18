<script lang="ts">
	import type { ITodo } from '../store/todos.svelte.ts';

	interface ITodosProps extends ITodo {
		removeTodo: (id: string) => void;
	}

	let { id, title, completed, removeTodo }: ITodosProps = $props();
</script>

<div class="todo">
	<h3 class:completed class="title">{title}</h3>
	<div class="status">
		<p>{completed ? 'Completed' : 'Not completed'}</p>
		<input type="checkbox" bind:checked={completed} />
	</div>
	<button
		onclick={() => {
			removeTodo(id);
		}}>Remove todo</button
	>
</div>

<style>
	.todo {
		width: 400px;
		display: flex;
		background-color: lightgray;
		flex-direction: column;
		align-items: center;
		padding: 10px;
		gap: 10px;
		border: 1px solid #333;
		border-radius: 20px;

		.status {
			width: 100%;
			display: flex;
			justify-content: space-around;
			padding: 0 40px;
		}
	}

	.title {
		color: #222222;
	}

	.completed {
		text-decoration: line-through;
	}
</style>
