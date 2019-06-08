<script>
  export let name;
  let count = 0;

  const handleClick = () => {
    count += 1;
    console.log({ count });
  };

  const handleReset = () => (count = 0);
</script>

<style>
  h1 {
    font-weight: 100;
    text-transform: capitalize;
  }
  strong {
    font-weight: bold;
  }
  h2 {
    font-weight: 100;
    font-size: 1.2rem;
  }
</style>

<h1>
  Hello
  <strong>{name}</strong>
  !
</h1>
<h2>Playing with Svelte.</h2>

<button on:click={handleClick}>
  Clicked {count} {count === 1 ? 'time' : 'times'}
</button>
<button on:click={handleReset} disabled={count === 0}>Reset</button>
