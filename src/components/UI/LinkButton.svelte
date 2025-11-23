<script lang="ts">
	interface ILinkButtonProps {
		name: string;
		href: string;
		icon: string;
	}

	const { name, href, icon }: ILinkButtonProps = $props();
</script>

<a
	class="flex justify-between items-center w-full p-[7px_7px_7px_14px] bg-gradient-to-r from-brand-pink-light to-liniar-secondary rounded-xl"
	href=""
>
	<span class="text-4/[22px] font-bold text-text-white">{name}</span>
	<img src={icon} alt={name} />
</a>

<style>
</style>
