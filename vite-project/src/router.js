import { writable } from 'svelte/store';

const VALID = ['home', 'about', 'history', 'sponsorship', 'contact'];

function normalize(hash) {
  const clean = hash.replace(/^#\/?/, '').toLowerCase();
  return VALID.includes(clean) ? clean : 'home';
}

function createRouter() {
  const initial = typeof window !== 'undefined' ? normalize(window.location.hash) : 'home';
  const { subscribe, set } = writable(initial);

  if (typeof window !== 'undefined') {
    window.addEventListener('hashchange', () => set(normalize(window.location.hash)));
  }

  return {
    subscribe,
    go(page) {
      window.location.hash = `/${page}`;
      set(normalize(page));
      window.scrollTo({ top: 0, behavior: 'auto' });
    },
  };
}

export const route = createRouter();
export const pages = VALID;
