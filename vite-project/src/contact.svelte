<script>
  export let navigate;
  const base = import.meta.env.BASE_URL;

  import bgPattern from './assets/bg-lowpoly.svg';

  import logo from './assets/_logo.png';
  import emailIcon from './assets/icon-email.png';
  import instagramIcon from './assets/icon-instagram.png';
  import linkedinIcon from './assets/icon-linkedin.png';

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'History', path: '/history' },
    { label: 'Sponsorship', path: '/sponsorship' },
    { label: 'Contact', path: '/contact' }
  ];

  const socials = [
    { title: 'Email', icon: emailIcon, href: 'mailto:rocketry@example.com' },
    { title: 'Instagram', icon: instagramIcon, href: 'https://www.instagram.com/uc_seds_queen_city_rocketry/' },
    { title: 'LinkedIn', icon: linkedinIcon, href: 'https://www.linkedin.com/in/uc-seds-queen-city-rocketry-23a871262/' }
  ];

  const address = 'Club address goes here';
  const mapEmbedUrl = 'https://www.google.com/maps?q=University+of+Cincinnati&output=embed';
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Ubuntu+Sans+Mono:ital,wght@0,400..700;1,400..700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<div class="page" style="background-image: url({bgPattern})">
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
              class:current={link.label === 'Contact'}
              on:click|preventDefault={() => navigate(link.path)}
            >{link.label}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </header>

  <main>
    <section class="red-panel">
      <h2 class="panel-heading">Get in Touch!</h2>

      <div class="contact-grid">
        {#each socials as social}
          <a
            class="contact-card"
            href={social.href}
            target={social.href.startsWith('mailto:') ? undefined : '_blank'}
            rel="noreferrer"
          >
            <img src={social.icon} alt="" />
            <span>{social.title}</span>
          </a>
        {/each}

        {#if address}
          <div class="contact-card address-card">
            <span class="card-title">Address</span>
            <span>{address}</span>
          </div>
        {/if}

        {#if mapEmbedUrl}
          <div class="contact-card map-card" class:full={!address}>
            <iframe
              title="Club location map"
              src={mapEmbedUrl}
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              allowfullscreen
            ></iframe>
          </div>
        {/if}
      </div>
    </section>
  </main>
</div>

<style>
  :root {
    --charcoal: #3d3d3d;
    --charcoal-dark: #2b2b2b;
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
    font-family: 'Ubuntu Sans Mono', ui-monospace, monospace;
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    min-height: 100vh;
    padding-bottom: 3rem;
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
    font-family: 'Ubuntu Sans Mono', ui-monospace, monospace;
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

  main {
    position: relative;
    z-index: 1;
    max-width: 1800px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 0;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }

  h2 {
    font-family: 'Ubuntu Sans Mono', ui-monospace, monospace;
    font-weight: 700;
    margin: 0;
  }

  .red-panel {
    background: var(--accent-red);
    border-radius: 4px;
    padding: 1.75rem;
  }

  .panel-heading {
    font-size: 1.6rem;
    color: var(--off-white);
    padding-bottom: 0.6rem;
    margin-bottom: 1.5rem;
    border-bottom: 2px solid var(--off-white);
    display: inline-block;
  }

  .contact-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.75rem;
  }

  .contact-card {
    background: var(--off-white);
    color: #222;
    border: 1px solid #b8b8b8;
    border-radius: 4px;
    min-height: 10rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 0.9rem;
    padding: 1.25rem;
    text-align: center;
    text-decoration: none;
    font-weight: 700;
    font-size: 1.15rem;
    transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease;
  }

  a.contact-card:hover,
  a.contact-card:focus-visible {
    transform: translateY(-3px);
    border-color: var(--accent-red);
    color: var(--accent-red);
  }

  .contact-card img {
    width: 4rem;
    height: 4rem;
    object-fit: contain;
    display: block;
  }

  .address-card {
    font-weight: 400;
    line-height: 1.5;
  }

  .address-card .card-title {
    font-weight: 700;
  }

  .map-card {
    grid-column: span 2;
    padding: 0;
    overflow: hidden;
    min-height: 12rem;
  }

  .map-card.full {
    grid-column: 1 / -1;
  }

  .map-card iframe {
    width: 100%;
    height: 100%;
    min-height: 14rem;
    border: 0;
    display: block;
  }

  @media (max-width: 800px) {
    .contact-grid {
      grid-template-columns: 1fr;
    }
    .map-card,
    .map-card.full {
      grid-column: auto;
    }
  }
</style>