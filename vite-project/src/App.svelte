<script>
  /**
   * Notes for future modifications:
   * 
   * For any questions reach out to Rania Haas @ haasr3@mail.uc.edu or @Rania-Hass on GitHub.
   * 
   * Updating Pages:
   * Each page is annoted with sections for text editing and for main chunks that may be changed after each year
   * of the capstone when tradeoff between years occur. This will be denoted as how to modify and move each year
   * into a historical section.
   * 
   * 
   * 
  */
  import { route } from './router.js';
  import Nav from './nav.svelte';
  import Footer from './footer.svelte';
  import Home from './home.svelte';
  import About from './about.svelte';
  import History from './history.svelte';
  import Sponsorship from './sponsors.svelte';
  import Contact from './contact.svelte';

  const base = import.meta.env.BASE_URL;

  function getRoute() {
    let path = location.pathname;
    if (path.startsWith(base)) {
      path = path.slice(base.length - 1); // keep leading slash
    }
    return path || '/';
  }

  let currentroute = getRoute();

  function navigate(path) {
    history.pushState({}, '', base.slice(0,-1) + path);
    currentroute = path;
  }

  window.addEventListener('popstate', () => {
    currentroute = location.pathname;
  });
  /**notes for updating build:
   * 1. npm run dev in vite-project and ensure it works
   * if it doesnt re-install npm
   * 2. npm run build
   * 3. npm run deploy
   * */

</script>

{#if currentroute === '/'}
  <Home {navigate} />
{:else if currentroute === '/about'}
  <About {navigate} />
{:else if currentroute === '/history'}
  <History {navigate} />
{:else if currentroute === '/sponsorship'}
  <Sponsorship {navigate} />
{:else if currentroute === '/contact'}
  <Contact {navigate} />
{:else}
  <Home {navigate} />
{/if}



