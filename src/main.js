import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		lastname: 'Jullien'
	}
							// props: tell svelte to populate 
							// varaiable 'lastname' with value 'Jullien'
});

export default app;
