<script lang="ts">
	type InputEl = HTMLInputElement | HTMLTextAreaElement;

	interface IInputProps {
		field?: string;
		placeholder?: string;
		value?: string;
		multiline?: boolean;
		disabled?: boolean;
		onInput?: (field: string | undefined, value: string) => void;
	}

	const {
		field,
		value,
		placeholder,
		multiline = false,
		disabled = false,
		onInput
	}: IInputProps = $props();

	const handleInput = (e: Event) => {
		const targetElement = e.currentTarget as HTMLInputElement | HTMLTextAreaElement;
		onInput?.(field, targetElement.value);
	};
</script>

{#if multiline}
	<textarea
		{value}
		class="w-full h-[94px] p-2.5 rounded-xl bg-block-background text-description-dark focus:outline-none resize-none"
		oninput={handleInput}
		{placeholder}
		{disabled}
	></textarea>
{:else}
	<input
		{value}
		class="w-full p-2.5 rounded-xl bg-block-background text-description-dark focus:outline-none"
		oninput={handleInput}
		{placeholder}
		{disabled}
	/>
{/if}
