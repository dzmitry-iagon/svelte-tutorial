import {iternlIcon, flintIcon, laceIcon} from '../assets';

export const LAUNCHER_STEPS_DATA = [
		{
			title: 'Welcome!',
			subtitle: 'Wallet Sign-in',
			description:
				'Your available Wallets are listed here below. Click one to connect the desired wallet and Sign in'
		},
		{
			title: 'Payment Plan',
			subtitle: 'Choose A Tier',
			description:
				'Select one of the tiers according to the API calls. You can renew the plan from you dashboard each month.'
		},
		{
			title: 'Payment Processing...',
			subtitle: 'Choose A Tier',
			description: 'You will be redirected shortly'
		},
		{
			title: 'Project launcher',
			subtitle: 'Project Info',
			description:
				'Define your Statur Project name and add a short description for users to read. You cannot change this data later.'
		},
		{
			title: 'Project launcher',
			subtitle: 'Branding',
			description:
				'Pick a color from the palette below. You can use the top right switch to check both light and dark modes'
		},
		{
			title: 'Welcome Administrator!',
			subtitle: 'Create Account',
			description: 'Create your public account name and choose an avatar.'
		},
		{
			title: 'Processing transaction...',
			subtitle: 'Creating Account',
			description: 'Please bear with us, you’ll be redirected soon.'
		},
		{
			title: 'Account Ready for:',
			subtitle: 'Gotham City',
			description:
				'Click the button below to join the project, access the administration panel and finalize the project setup'
		}
	];
	

export	const WALLETS = [
		{ id: 1, name: 'Connect Eternl Account', href: '/eternl', icon: iternlIcon },
		{ id: 2, name: 'Connect Flint Account', href: '/flint', icon: flintIcon },
		{ id: 3, name: 'Connect Lace Account', href: '/lace', icon: laceIcon }
	];

export const TIER_LIST = [
		{ id: '1', price: '0', ada: '0', apiCalls: '100' },
		{ id: '2', price: '10', ada: '20', apiCalls: '1000' },
		{ id: '3', price: '50', ada: '100', apiCalls: '5000' },
		{ id: '4', price: '100', ada: '200', apiCalls: '10000' }
	];


