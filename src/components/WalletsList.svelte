<script lang="ts">
	import LinkButton from './UI/LinkButton.svelte';
	import { iternlIcon, flintIcon, laceIcon } from '../assets';
	import { LAUNCHER_CONST } from '../const';

	const { WALLETS } = LAUNCHER_CONST;
</script>

<div class="w-full flex flex-col items-center gap-3">
	{#each WALLETS as wallet}
		<LinkButton {...wallet} />
	{/each}
</div>

<style>
</style>
