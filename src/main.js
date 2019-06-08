import Counter from './Counter.svelte';
import Quote from './Quote.svelte';

const path = window.location.search;
let app;

if (!path) {
  app = new Counter({
    target: document.body,
    props: {
      name: 'whirled',
    },
  });
}

if (path === '?Quote') {
  app = new Quote({
    target: document.body,
  });
}

export default app;
