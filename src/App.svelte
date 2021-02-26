<script>
	let name = 'Bruno';
	export let lastname; 
							// export: will be set outside, in main.js
							// where we have: import App from './App.svelte';
	let age = 56;

	/*
		Reactive Variables:

		$: uppercaseName = name.toUpperCase()
			- $: is a code label: syntax, usable in JS but never used :)
			- this is called: "labeled statements" (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/label)
			- Svelte hijacks it and assigns a different meaning to it
			- no need to declare variable, svelte will do it for you
			- if name changes 
					=> svelte recalculates uppercaseName
					=> then update DOM as we have '<h1>Hello {uppercaseName} ...' in HTML part
			- sources are right side of = sign
	 */
	$: uppercaseName = name.toUpperCase()
	
	/*
		More Reactivity: Every time 'name' changes, call the following line
	*/ 
	$: console.log("name="+name);

	/*
		If with 'name' as input of the if
	*/
	$: if (name === 'Bernard') {
		console.log('Name is Bernard, we set age to 100!')
		age = 100
	}

	function IncrementAge() {
		age += 1;
	}
	function ChangeName() {
		name = 'Bernard';
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<!-- 
	{age}			can be any javascript expression, such as {age + 1}
					Recom: avoid having complexe code here!
	{uppercaseName}	- instead of having "in markup" code we use a reactive variable
					- if have uppercaseName needed elsewhere, no need to duplicate name.toUpperCase()
					- see above: $: uppercaseName = name.toUpperCase()
					- advice: keep the markup clean and put code in the <script> part
 -->
<h1>Hello {uppercaseName} {lastname.toUpperCase()}, my age is {age+1}.</h1>

<!-- 
	on:click 		is not standard HTML, it is svelte syntax, compiled
					to add an event listener in generated code
	{IncrementAge} 	tells svelte: "look in <script>! about IncrementAge"
					a ptr to function, do not add () as it will call it!!!

	
	this code is then compiled to build/bundle.js into pure JS Vanila code 
 -->
<button on:click="{IncrementAge}">Change Age</button>
<button on:click="{ChangeName}">Change Name</button>
