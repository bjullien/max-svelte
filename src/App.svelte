<script>
	let name = 'bruno';
	let age = 56;

	function IncrementAge() {
		age += 1;
	}
</script>

<style>
	h1 {
		color: purple;
	}
</style>

<h1>Hello {name}!, my age is {age}.</h1>

<!-- 
	on:click is not standard HTML, it is svelte
	IncrementAge: a ptr to function, do not add () as it will call it!!!
 -->
<button on:click="{IncrementAge}">Change Age</button>
