<script lang="ts">
	import PaymentPlanList from './PaymentPlanList.svelte';
	import ProjectInfo from './ProjectInfo.svelte';
	import WalletsList from './WalletsList.svelte';

	interface ILauncherDataProps {
		title: string;
		subtitle: string;
		description: string;
	}

	let { title, subtitle, description }: ILauncherDataProps = $props();
</script>

<div class="w-full flex justify-center bg-[#3a0b45]">
	<main
		class="max-w-[480px] flex flex-col items-center gap-8 my-[30px] p-6 rounded-4xl bg-block-background"
	>
		<div class="flex flex-col items-center">
			<p class="text-brand-pink-light text-[18px]/[22px] font-bold">{title}</p>
			<h2 class="mb-4 text-title-light font-bold text-[46px]/[56px]">{subtitle}</h2>
			<div class="text-center text-description-dark text-4/[28px]">{description}</div>
		</div>
		<!-- <WalletsList /> -->
		<!-- <PaymentPlanList /> -->
		<ProjectInfo />
	</main>
</div>

<style>
</style>
