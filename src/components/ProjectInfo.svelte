<script lang="ts">
	import type { IProjectInfo } from '../types';
	import Button from './UI/Button.svelte';
	import Input from './UI/Input.svelte';

	let projectInfo: IProjectInfo = $state({ name: '', description: '' });

	const saveProjectInfo = () => {
		console.log(projectInfo);
	};

	function handleChange(field: string | undefined, value: string) {
		console.log(value);
		if (!field) return;
		projectInfo[field as keyof typeof projectInfo] = value;
	}
</script>

<div class="flex flex-col w-full gap-y-2">
	<Input
		field="name"
		value={projectInfo.name}
		onInput={handleChange}
		placeholder={'Project Name'}
	/>
	<Input
		field="description"
		value={projectInfo.description}
		onInput={handleChange}
		placeholder={'Describe your project'}
		multiline={true}
	/>
	<Button onClick={saveProjectInfo} style={'mt-5'}>Create Project</Button>
</div>
