<script>
  export let navigate;

  const base = import.meta.env.BASE_URL;


  import logo from './assets/_logo.png';

  import heroImg1 from './assets/2024/2024_1.jpg';
  import heroImg2 from './assets/2024/2024_2.jpg';
  import heroImg3 from './assets/2025/2025_1.jpg';

  const slides = [
    { src: heroImg1, title: 'Bearcat Rocketry' },
    { src: heroImg2, title: 'IREC 2027' },
    { src: heroImg3, title: 'Built By The Team' }
  ];

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'History', path: '/history' },
    { label: 'Sponsorship', path: '/sponsorship' },
    { label: 'Contact', path: '/contact' }
  ];

  const tintImages = true;

  let current = 0;
  const total = slides.length;

  function prevSlide() {
    current = (current - 1 + total) % total;
  }

  function nextSlide() {
    current = (current + 1) % total;
  }

  let autoplay;
  function startAutoplay() {
    autoplay = setInterval(nextSlide, 6000);
  }
  function stopAutoplay() {
    clearInterval(autoplay);
  }
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Ubuntu+Sans+Mono:ital,wght@0,400..700;1,400..700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<svelte:window on:keydown={(e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
}} />

<div class="page">
  <header class="site-header">
    <a class="logo-badge" href="#home" aria-label="Home">
      <img src={logo} alt="UC Rocketry Club logo" />
    </a>

    <nav class="site-nav" aria-label="Primary">
      <ul>
        {#each navLinks as link}
          <li>
            <a
              href={base.slice(0, -1) + link.path}
              class:current={link.label === 'Home'}
              on:click|preventDefault={() => navigate(link.path)}
            >{link.label}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </header>

  <section
    class="hero"
    on:mouseenter={stopAutoplay}
    on:mouseleave={startAutoplay}
  >
    <button class="arrow arrow-left" on:click={prevSlide} aria-label="Previous slide">
      &#8592;
    </button>

    {#each slides as slide, i}
      <div class="slide" class:active={i === current} class:tinted={tintImages}>
        <img src={slide.src} alt="" />
        <h1 class="slide-title">{slide.title}</h1>
      </div>
    {/each}

    <button class="arrow arrow-right" on:click={nextSlide} aria-label="Next slide">
      &#8594;
    </button>

    <div class="dots" role="tablist" aria-label="Slide selection">
      {#each slides as _, i}
        <button
          class="dot"
          class:active={i === current}
          role="tab"
          aria-selected={i === current}
          aria-label={`Go to slide ${i + 1}`}
          on:click={() => (current = i)}
        ></button>
      {/each}
    </div>
  </section>

  <slot />
</div>

<style>
  :root {
    --charcoal: #232323;
    --charcoal-dark: #1a1a1a;
    --accent-red: #c0272d;
    --off-white: #f5f5f5;
  }

  .page {
    background: var(--charcoal-dark);
    color: var(--off-white);
    font-family: "Ubuntu Sans Mono", ui-monospace, monospace;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    min-height: 100vh;
  }

  .site-header {
    position: sticky;
    top: 0;
    z-index: 20;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1.5rem;
    padding: 0.75rem 2rem;
    background: var(--charcoal);
    border-bottom: 3px solid var(--accent-red);
  }

  .logo-badge {
    display: inline-flex;
    background: var(--off-white);
    border-radius: 10px;
    padding: 0.6rem;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.35);
    flex-shrink: 0;
  }

  .logo-badge img {
    height: 3.25rem;
    width: auto;
    display: block;
  }

  .site-nav ul {
    display: flex;
    gap: 2rem;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .site-nav a {
    color: var(--off-white);
    text-decoration: none;
    font-family: "Ubuntu Sans Mono", ui-monospace, monospace;
    font-weight: 500;
    font-size: 1.05rem;
    letter-spacing: 0.02em;
    padding-bottom: 0.3rem;
    border-bottom: 2px solid transparent;
    transition: border-color 0.2s ease, color 0.2s ease;
  }

  .site-nav a:hover,
  .site-nav a:focus-visible,
  .site-nav a.current {
    color: var(--accent-red);
    border-bottom-color: var(--accent-red);
  }

  @media (max-width: 800px) {
    .site-header {
      flex-direction: column;
      align-items: flex-start;
    }
    .site-nav ul {
      flex-wrap: wrap;
      gap: 1rem 1.25rem;
    }
  }

  .hero {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 8;
    overflow: hidden;
    background: #000;
  }

  .slide {
    position: absolute;
    inset: 0;
    opacity: 0;
    transition: opacity 0.7s ease;
  }

  .slide.active {
    opacity: 1;
  }

  .slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .slide.tinted::after {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0.55) 0%,
      rgba(0, 0, 0, 0.15) 45%,
      rgba(0, 0, 0, 0.3) 100%
    );
  }

  .slide-title {
    position: absolute;
    left: 50%;
    bottom: 45%;
    transform: translateX(-50%);
    margin: 0;
    width: 90%;
    text-align: center;
    font-family: "Ubuntu Sans Mono", ui-monospace, monospace;
    font-optical-sizing: auto;
    font-weight: 700;
    font-style: normal;
    font-size: clamp(2rem, 6vw, 4.5rem);
    color: var(--off-white);
    text-shadow: 0 2px 12px rgba(0, 0, 0, 0.6);
  }

  .arrow {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    z-index: 5;
    background: transparent;
    border: none;
    color: var(--off-white);
    font-size: 2rem;
    line-height: 1;
    cursor: pointer;
    padding: 0.5rem 0.75rem;
    opacity: 0.85;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  .arrow:hover {
    opacity: 1;
    transform: translateY(-50%) scale(1.1);
  }

  .arrow-left {
    left: 1rem;
  }

  .arrow-right {
    right: 1rem;
  }

  .dots {
    position: absolute;
    bottom: 1rem;
    left: 50%;
    transform: translateX(-50%);
    z-index: 5;
    display: flex;
    gap: 0.5rem;
  }

  .dot {
    width: 0.6rem;
    height: 0.6rem;
    border-radius: 50%;
    border: none;
    background: rgba(245, 245, 245, 0.4);
    cursor: pointer;
    padding: 0;
    transition: background 0.2s ease, transform 0.2s ease;
  }

  .dot.active {
    background: var(--accent-red);
    transform: scale(1.2);
  }

  @media (max-width: 800px) {
    .hero {
      aspect-ratio: 4 / 5;
    }
    .slide-title {
      font-size: clamp(1.5rem, 8vw, 2.5rem);
      bottom: 10%;
    }
  }
</style>