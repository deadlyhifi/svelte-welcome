<script>
  let promise;
  $: disabled = false;

  async function getRandomQuote() {
    disabled = true;

    const res = await fetch(`http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1`, {
      cache: 'no-store',
    });
    const text = await res.text();

    if (res) {
      disabled = false;
    }

    if (res.ok) {
      return text;
    } else {
      throw new Error(text);
    }
  }

  function handleClick() {
    promise = getRandomQuote();
  }
</script>

<style>

</style>

<h1>Random Quote</h1>
<button on:click={handleClick} {disabled}>Fetch Random Quote</button>

{#await promise}
  <p>…waiting</p>
{:then quote}
  <p>{quote ? quote : ''}</p>
{:catch error}
  <p style="color: red">{error.message}</p>
{/await}
