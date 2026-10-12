<script>
  export let navigate;
  const base = import.meta.env.BASE_URL;

  import bgPattern from './assets/bg-lowpoly.svg';

  import logo from './assets/_logo.png';
  import ucFoundationLogo from './assets/UCF_Logo_BlackRed.png';

  import sponsorLogo1 from './assets/logos/SolidWorks_Logo.jpeg';
  import sponsorLogo2 from './assets/logos/ansys_logo.png';
  import sponsorLogo3 from './assets/logos/iSPACE.jpg';
  import sponsorLogo4 from './assets/logos/CEAS.jpeg';

  //To update the packet, update the Public file and the according name
  const pdfUrl = `${import.meta.env.BASE_URL}SponsorshipPacket.pdf`;

  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'History', path: '/history' },
    { label: 'Sponsorship', path: '/sponsorship' },
    { label: 'Contact', path: '/contact' }
  ];
 
  //Current URL for donations
  const donationLink = 'https://foundation.uc.edu/donate/SpaceportCup';
 
  const sponsors = [
    { name: 'SolidWorks', logo: sponsorLogo1, url: 'https://www.solidworks.com/' },
    { name: 'Ansyis', logo: sponsorLogo2, url: 'https://ansys.synopsys.com/' },
    { name: 'iSPACE', logo: sponsorLogo3, url: 'https://ispacestem.org/' },
    { name: 'UC - College of Engineering and Applied Sciences', logo: sponsorLogo4, url :'https://www.ceas.uc.edu/'}
  ];
</script>
 
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
              href={base + link.path}
              class:current={link.label === 'Sponsorship'}
              on:click|preventDefault={() => navigate(link.path)}
            >{link.label}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </header>
 
  <main>
    <!-- ---------- Thank you to our Sponsors! ---------- -->
    <section class="red-panel sponsors-panel">
      <h2 class="panel-heading">Thank you to our Sponsors!</h2>
 
      <div class="sponsor-row">
        {#each sponsors as sponsor}
          <a
            class="white-box sponsor-box"
            href={sponsor.url}
            target="_blank"
            rel="noreferrer"
            aria-label={sponsor.name}
          >
            <img src={sponsor.logo} alt={sponsor.name} />
          </a>
        {/each}
      </div>
    </section>

    <!-- ---------- Interested in Sponsoring? ---------- -->
    <section class="red-panel sponsoring-panel">
      <h2 class="panel-heading">Interested in Sponsoring?</h2>

      <div class="sponsoring-content">
        <div class="info-box tiers-box">
          <div class="tiers-wrapper">
          
            <!--Edits for tier names and bennefits-->
            <div class="tiers-grid">
            <div class="info-box tier-box">
              <div class="tier-heading">Bronze</div>
              <div class="tier-heading">$100-499</div>
              <div class="tier-line">Invitation to technical reviews</div>
              <div class="tier-line">Logo on website</div>
              <div class="tier-line">Logo on t‑shirt</div>
            </div>

            <div class="info-box tier-box">
              <div class="tier-heading">Silver</div>
              <div class="tier-heading">$500-2,999</div>
              <div class="tier-line">Invitation to technical reviews</div>
              <div class="tier-line">Logo on website and t‑shirt</div>
              <div class="tier-line">Social media benefits (Instagram & LinkedIn)</div>
            </div>

            <div class="info-box tier-box">
              <div class="tier-heading">Gold</div>
              <div class="tier-heading">$3,000+</div>
              <div class="tier-line">Invitation to test launches</div>
              <div class="tier-line">Extra‑large logo on rocket</div>
              <div class="tier-line">Extra‑large logo on t‑shirt</div>
              <div class="tier-line">Social media benefits (Instagram & LinkedIn)</div>
            </div>
          </div>
          </div>
        </div>

        <div class="side-column">

          <!-- Donation Link -->
          <a
            class="white-box foundation-box"
            href={donationLink}
            target="_blank"
            rel="noreferrer"
          >
            <img src={ucFoundationLogo} alt="University of Cincinnati Foundation" />
          </a>

          <!-- Sponsorship Packet -->
          <a class="white-box link-box" href={pdfUrl} target="_blank" rel="noreferrer">
            View our Sponsorship Packet here!
          </a>

        </div>
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
    font-optical-sizing: auto;
    font-weight: 400;
    font-style: normal;
    min-height: 100vh;
    padding-bottom: 3rem;
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
 
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2.5rem 2rem 0;
    display: flex;
    flex-direction: column;
    gap: 2.5rem;
  }
 
  h2 {
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
 
  .white-box {
    background: var(--off-white);
    border: 1px solid #b8b8b8;
    border-radius: 4px;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
 
  .white-box img {
    max-width: 85%;
    max-height: 85%;
    object-fit: contain;
    display: block;
  }
 
  .info-box {
    background: var(--off-white);
    color: #222;
    border: 1px solid #b8b8b8;
    border-radius: 4px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
  }
 
  /* ---------- Interested in Sponsoring? ---------- */
  .sponsoring-content {
    display: flex;
    gap: 1.75rem;
    align-items: stretch;
  }
 
  .tiers-box {
    flex: 1.4 1 0;
    min-height: 16rem;
    text-align: center;
    justify-content: center;
  }
 
  .side-column {
    flex: 1 1 0;
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }
 
  .foundation-box {
    min-height: 7rem;
    padding: 1rem;
  }
 
  .link-box {
    flex: 1 1 auto;
    min-height: 5rem;
    color: #222;
    text-decoration: none;
    font-weight: 700;
    letter-spacing: 0.05em;
    transition: color 0.2s ease, border-color 0.2s ease;
  }
 
  .link-box:hover {
    color: var(--accent-red);
    border-color: var(--accent-red);
  }
 
  @media (max-width: 800px) {
    .sponsoring-content {
      flex-direction: column;
    }
  }
 
  .sponsor-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.75rem;
  }
 
  .sponsor-box {
    width: 15rem;
    height: 15rem;
    flex-shrink: 0;
    cursor: pointer;
  }
 
  @media (max-width: 700px) {
    .sponsor-box {
      width: 100%;
      max-width: 15rem;
    }
  }

  /* ----- TIERS ------ */
  .tiers-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 1.25rem;
  }

  .tier-box {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1.5rem;

  }

  .tier-heading {
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--accent-red);
    margin-bottom: 0.5rem;
    align-items: center;
  }

  .tier-line {
    font-size: 1rem;
    margin: 0.2rem 0;
  }

  @media (max-width: 800px) {
    .tiers-grid {
      grid-template-columns: 1fr;
    }
  }



</style>
 