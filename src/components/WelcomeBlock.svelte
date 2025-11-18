<script lang="ts">
	import LinkButton from './LinkButton.svelte';

	const WELCOME_LINKS = [
		{ id: 1, name: 'Connect Eternl Account', href: '/eternl', icon: 'icon' },
		{ id: 2, name: 'Connect Flint Account', href: '/flint', icon: 'icon' },
		{ id: 3, name: 'Connect Lace Account', href: '/lace', icon: 'icon' }
	];
</script>

<main class="welcomeWrapper">
	<p class="title">Welcome!</p>
	<h2 class="subtitle">Wallet Sign-in</h2>
	<div class="description">
		Your available Wallets are listed here below. Click one to connect the desired wallet and Sign
		in
	</div>
	<div class="linksList">
		{#each WELCOME_LINKS as link}
			<LinkButton {...link} />
		{/each}
	</div>
</main>

<style>
	.welcomeWrapper {
		max-width: 800px;
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 30px 0;
		padding: 40px;
		background-color: #3a0b45;
		border: 1px solid purple;
		border-radius: 40px;

		.title {
			color: #ff4ec6;
			margin-bottom: 10px;
			font-size: 24px;
		}

		.subtitle {
			color: white;
			font-size: 50px;
			margin-bottom: 30px;
		}

		.description {
			margin-bottom: 30px;
			text-align: center;
			color: lightgray;
			font-size: 25px;
			line-height: 1.5;
		}

		.linksList {
			width: 100%;
			display: flex;
			flex-direction: column;
			align-items: center;
			gap: 15px;
		}
	}
</style>
