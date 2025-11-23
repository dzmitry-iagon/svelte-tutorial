<script lang="ts">
	import type { ITier } from '../../types';

	interface ITierProps {
		tier: ITier;
		selectedTier: ITier | null;
		onClick: (tier: ITier) => void;
	}

	const { tier, selectedTier, onClick }: ITierProps = $props();
	const { id, price, ada, apiCalls } = tier;
</script>

<button
	class={`w-full flex flex-col items-center justify-between gap-y-1.5 p-3 bg-block-background rounded-xl border ${selectedTier?.id === id ? 'border-brand-pink-light' : 'border-transparent'}`}
	onclick={() => onClick(tier)}
>
	<div class="w-full flex justify-between items-center">
		<p class="font-bold text-[22px]/[28px] text-title-light">
			${price}
		</p>
		<p class="text-xs/[15px] text-text-pink">{ada} ADA</p>
	</div>
	<hr class="w-full border-block-background" />
	<div class="w-full flex justify-between items-center">
		<p class="text-xs/[15px] text-title-light">API calls</p>
		<p class="text-xs/[15px] text-description-dark">{apiCalls}/day</p>
	</div>
</button>
