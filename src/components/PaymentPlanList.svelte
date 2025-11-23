<script lang="ts">
	import { LAUNCHER_CONST } from '../const';
	import type { ITier } from '../types';
	import Button from './UI/Button.svelte';
	import PaymentTierButton from './UI/PaymentTierButton.svelte';

	const { TIER_LIST } = LAUNCHER_CONST;

	let selectedTier: ITier | null = $state(null);

	const selectTier = (tier: ITier) => {
		selectedTier = tier;
		console.log('click');
	};

	const savePlan = () => {
		console.log(selectedTier);
	};
</script>

<div class="w-full flex flex-col gap-y-8">
	<div class="w-full grid grid-cols-2 gap-3">
		{#each TIER_LIST as tier}
			<PaymentTierButton {tier} {selectedTier} onClick={selectTier} />
		{/each}
	</div>
	<Button onClick={savePlan} isDisabled={!selectedTier}>Pay & Proceed</Button>
</div>

<style>
</style>
