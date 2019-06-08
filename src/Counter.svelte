<script>
  export let name;
  let count = 0;
  $: disabled = count === 0;

  const handleClick = () => {
    count += 1;
    console.log({ count });
  };

  const handleReset = () => (count = 0);
</script>

<h1>
  Hello
  <strong>{name}</strong>
  !
</h1>
<h2>Playing with Svelte.</h2>

<button on:click={handleClick}>Clicked {count} {count === 1 ? 'time' : 'times'} </button>
<button on:click={handleReset} {disabled}>Reset</button>
