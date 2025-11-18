<script lang="ts">
	interface ILinkButtonProps {
		name: string;
		href: string;
		icon: string;
	}

	const { name, href, icon }: ILinkButtonProps = $props();
</script>

<a class="linkButton" href="">
	<span class="linkName">{name}</span>
	<span class="icon">{icon}</span>
</a>

<style>
	.linkButton {
		width: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 18px 15px;
		background: linear-gradient(90deg, #ff4ec4 0%, #c0449a 50%, #7b4c87 100%);
		border-radius: 10px;
		text-decoration: none;

		span {
			color: white;
		}
	}
</style>
