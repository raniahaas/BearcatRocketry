<script>
  // Passed down from App.svelte's router — calling this pushes a new
  // history entry and swaps which page component App.svelte renders.
  export let navigate;

  // Matches the base-path handling in App.svelte so links resolve
  // correctly under the GitHub Pages base URL too.
  const base = import.meta.env.BASE_URL;

  // Low-poly geometric background used behind the whole page
  import bgPattern from './assets/bg-lowpoly.svg';

  // --- Assets -----------------------------------------------------------
  // Drop your files into src/assets/ and update these imports.
  // Logo:
  import logo from './assets/_logo.png';

  // Hero gallery images — add or remove entries freely, the carousel
  // adapts to however many you provide.
  import heroImg1 from './assets/2024/2024_1.jpg';
  import heroImg2 from './assets/2024/2024_2.jpg';
  import heroImg3 from './assets/2025/2025_1.jpg';
  import heroImg4 from './assets/2025/Picture1.jpg';

  //Alternate pictures from the club
  import clubHero1 from './assets/20251029_224857000_iOS.jpg';
  import clubHero2 from './assets/20251106_004800000_iOS.jpg';

  const slides = [
    { src: heroImg1, title: 'Bearcat Rocketry' },
    { src: heroImg2, title: 'IREC 2027' },
    { src: heroImg3, title: 'Bearcat Rocketry' },
    { src: heroImg4, title: 'Bearcat Rocketry'},
    { src: clubHero1, title: 'Bearcat Rocketry'},
    { src: clubHero2, title: 'Bearcat Rocketry'}
  ];

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'History', path: '/history' },
    { label: 'Sponsorship', path: '/sponsorship' },
    { label: 'Contact', path: '/contact' }
  ];

  // Sponsor logos for the partners strip (same files the Sponsorship page uses)
  // Every image dropped into src/assets/sponsors/ shows up here automatically.
  const logoFiles = import.meta.glob('./assets/sponsors/*.{png,jpg,jpeg,svg,webp}', {
    eager: true,
    import: 'default'
  });
  const partners = Object.values(logoFiles).map((logo) => ({ name: 'Sponsor', logo }));

  // ---- Editable page text ---------------------------------------------
  const mission =
    'Mission statement goes here — what the club does and why it matters to its members.';
  const vision =
    'Vision statement goes here — where the club is headed and what it wants to be known for.';

  // Alternating image/text blocks. `path` is the page the button opens.
  // Swap the images for real photos in src/assets/.
  const features = [
    {
      title: 'What is IREC?',
      text: 'A short blurb about the Intercollegiate Rocket Engineering Competition and what our team builds for it.',
      button: 'Learn More',
      path: '/about',
      image: heroImg2
    },
    {
      title: 'Become a Sponsor',
      text: 'Our work is supported by generous partners. See how your support helps us build and launch.',
      button: 'Sponsorship',
      path: '/sponsorship',
      image: heroImg3
    },
    {
      title: 'Our History',
      text: 'A look back at the teams, rockets, and launches that brought the club to where it is today.',
      button: 'See Our History',
      path: '/history',
      image: heroImg1
    }
  ];

  const location = {
    name: 'Bearcat Rocketry Capstone',
    lines: ['2600 Clifton Ave', 'Cincinnati, OH 45221']
  };

  const hrefFor = (path) => base.slice(0, -1) + path;

  // Darkens each hero photo slightly so the overlaid title stays readable
  // regardless of the image's own brightness.
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



<svelte:window on:keydown={(e) => {
  if (e.key === 'ArrowLeft') prevSlide();
  if (e.key === 'ArrowRight') nextSlide();
}} />

<div class="page" style="background-image: url({bgPattern})">
  <header class="site-header">
    <a class="logo-badge" href="#home" aria-label="Home">
      <img src={logo} alt="UC Capstone logo" />
    </a>

    <nav class="site-nav" aria-label="Primary">
      <ul>
        {#each navLinks as link}
          <li>
            <a
              href={base + link.path}
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

  <footer class="site-footer">
    <div class="footer-inner">
      <div>
        <h3>{location.name}</h3>
        {#each location.lines as line}
          <p>{line}</p>
        {/each}
      </div>
      <a
        class="btn btn-outline"
        href={hrefFor('/contact')}
        on:click|preventDefault={() => navigate('/contact')}
      >Contact Us</a>
    </div>
    <p class="copyright">&copy; University of Cincinnati's Bearcat Rocketry Capstone - Developed by Rania Haas</p>
  </footer>

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
    background-color: var(--charcoal-dark);
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    background-repeat: no-repeat;
    color: var(--off-white);
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    min-height: 100vh;
  }

  /* ---------- Header ---------- */
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

  /* ---------- Hero ---------- */
  .hero {
    position: relative;
    width: 100%;
    aspect-ratio: 16 / 6.3;
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
  /* ---------- Clean content sections (below the hero) ---------- */
  main {
    background: var(--off-white);
    color: #1f1f1f;
  }

  main h2 {
    font-weight: 700;
    font-size: clamp(1.6rem, 3vw, 2.4rem);
    margin: 0 0 1rem;
  }

  main p {
    line-height: 1.7;
    font-size: 1.05rem;
    margin: 0 0 1.5rem;
    color: #3a3a3a;
  }

  .intro {
    max-width: 1100px;
    margin: 0 auto;
    padding: 5rem 2rem;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 4rem;
  }

  .intro h2 {
    padding-bottom: 0.6rem;
    border-bottom: 3px solid var(--accent-red);
    display: inline-block;
  }

  .feature {
    display: grid;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    gap: 4rem;
    max-width: 1200px;
    margin: 0 auto;
    padding: 3rem 2rem;
  }

  .feature.reverse .feature-img {
    order: 2;
  }

  .feature-img {
    width: 100%;
    aspect-ratio: 3 / 2;
    object-fit: cover;
    border-radius: 6px;
    display: block;
  }

  .btn {
    display: inline-block;
    background: var(--accent-red);
    color: var(--off-white);
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: 0.8rem 1.8rem;
    border-radius: 4px;
    border: 2px solid var(--accent-red);
    transition: background 0.2s ease, color 0.2s ease;
  }

  .btn:hover,
  .btn:focus-visible {
    background: transparent;
    color: var(--accent-red);
  }

  .site-footer {
    background: var(--charcoal-dark);
    color: var(--off-white);
    padding: 3rem 2rem 1.5rem;
    border-top: 3px solid var(--accent-red);
  }

  .footer-inner {
    max-width: 1100px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    flex-wrap: wrap;
  }

  .site-footer h3 {
    margin: 0 0 0.6rem;
    font-size: 1.1rem;
  }

  .site-footer p {
    margin: 0.15rem 0;
    opacity: 0.85;
  }

  .btn-outline {
    background: transparent;
    color: var(--off-white);
    border-color: var(--off-white);
  }

  .btn-outline:hover,
  .btn-outline:focus-visible {
    background: var(--accent-red);
    border-color: var(--accent-red);
    color: var(--off-white);
  }

  .copyright {
    text-align: center;
    margin-top: 2.5rem !important;
    font-size: 0.85rem;
    opacity: 0.6 !important;
  }

  @media (max-width: 800px) {
    .intro,
    .feature {
      grid-template-columns: 1fr;
      gap: 2rem;
    }
    .feature.reverse .feature-img {
      order: 0;
    }
    .numbers-row {
      grid-template-columns: repeat(2, 1fr);
    }
  }
</style>