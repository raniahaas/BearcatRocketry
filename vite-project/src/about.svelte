<script>
  export let navigate;
  const base = import.meta.env.BASE_URL;

  import logo from './assets/_logo.png';

  import whoWeAreImg from './assets/2026/image-20260426-185043-4a1e326e.jpeg';

  import placeholderPhoto from './assets/2025/headshots/Alex_Ravagnani_Headshot.jpg';
  //import Rania from './assets/2027/headshots/haasRania.JPG';

  
  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'History', href: '#history' },
    { label: 'Sponsorship', href: '#sponsorship' },
    { label: 'Contact', href: '#contact' }
  ];

  //Edit inital blurb here for 'What is IREC'
  const irecBlurb =
    'IREC (International Rocketry Engineering Competition) is a HPR (High powered rocketry) competition where students are confined to ' +
    'classes and face engineering challenges in the form of payload, optimization, and overall constraints. The 2027 competition will take place in Midland, Texas during June ' +
    '14th through the 19th hosted and presented by ERSA (Experimental Sounding Rocket Association).';

  //Edit for blurb under the what is IREC
  const teamBlurb =
    'UC Bearcat Capstone will be competing in the 2027 IREC competion 10,000ft COTS class while additionally participating in the ' +
    'additional provided challenges of live telemetary data, live video streaming during launch, and payload challenge for ingenuity and industry relavance.';

  const stats = [
    { value: '5', label: 'years of IREC/capstone' },
    { value: '40+', label: 'total participated students' },
    { value: '', label: '' },
    { value: '', label: '' }
  ];

  const extraInfoBlurb = 'Anything else here?';

  //President
  const president = {
    role: 'President',
    name: 'Landry Danielson',
    photo: placeholderPhoto,
    contacts: [
      { label: 'Contact', href: 'mailto:president@ucrocketry.org' },
      { label: 'Contact', href: '#' }
    ]
  };

  //Executibe Board, excluding president
  const execBoard = [
    {
      role: 'Treasurer',
      name: 'Daniel Herzog',
      photo: placeholderPhoto,
      contacts: [
        { label: 'Contact', href: 'mailto:treasurer@ucrocketry.org' },
        { label: 'Contact', href: '#' }
      ]
    },
    {
      role: 'Project Lead',
      name: 'First Last',
      photo: placeholderPhoto,
      contacts: [
        { label: 'Contact', href: 'mailto:projectlead@ucrocketry.org' },
        { label: 'Contact', href: '#' }
      ]
    },
    {
      role: 'Secretary',
      name: 'Rania Haas',
      photo: placeholderPhoto,
      contacts: [
        { label: 'Contact', href: 'mailto:secretary@ucrocketry.org' },
        { label: 'Contact', href: '#' }
      ]
    }
  ];

  //Launch Vechile Members
  const launchVehicleTeam = {
    title: 'Launch Vehicle',
    lead: {
      role: 'Launch Vehicle Lead',
      name: 'William Jackson',
      photo: placeholderPhoto,
      contacts: [
        { label: 'Contact', href: 'mailto:lv-lead@ucrocketry.org' },
        { label: 'Contact', href: '#' }
      ]
    },
    members: [
      {
        role: 'Launch Vehicle Member',
        name: 'Vinny Stefani',
        photo: placeholderPhoto,
        contacts: [
          { label: 'Contact', href: '#' },
          { label: 'Contact', href: '#' }
        ]
      },
      {
        role: 'Launch Vehicle Member',
        name: 'Allayna Backowski',
        photo: placeholderPhoto,
        contacts: [
          { label: 'Contact', href: '#' },
          { label: 'Contact', href: '#' }
        ]
      },
      {
        role: 'Launch Vehicle Member',
        name: 'Ross Scully',
        photo: placeholderPhoto,
        contacts: [
          { label: 'Contact', href: '#' },
          { label: 'Contact', href: '#' }
        ]
      },
      {
        role: 'Launch Vehicle Member',
        name: 'Grayson Razavi',
        photo: placeholderPhoto,
        contacts: [
          { label: 'Contact', href: '#' },
          { label: 'Contact', href: '#' }
        ]
      }
    ]
  };

  const payloadTeam = {
    title: 'Payload',
    lead: {
      role: 'Payload Lead',
      name: 'Aidan Beachler',
      photo: placeholderPhoto,
      contacts: [
        { label: 'Contact', href: 'mailto:payload-lead@ucrocketry.org' },
        { label: 'Contact', href: '#' }
      ]
    },
    members: [
      {
        role: 'Payload Member',
        name: 'Rania Haas',
        photo: placeholderPhoto,
        contacts: [
          { label: 'Contact', href: '#' },
          { label: 'Contact', href: '#' }
        ]
      },
      {
        role: 'Payload Member',
        name: 'Aidan Eliason',
        photo: placeholderPhoto,
        contacts: [
          { label: 'Contact', href: '#' },
          { label: 'Contact', href: '#' }
        ]
      },
    ]
  };

  const subTeams = [launchVehicleTeam, payloadTeam];
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="true" />
  <link
    href="https://fonts.googleapis.com/css2?family=Ubuntu+Sans+Mono:ital,wght@0,400..700;1,400..700&display=swap"
    rel="stylesheet"
  />
</svelte:head>

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
              class:current={link.label === 'About'}
              on:click|preventDefault={() => navigate(link.path)}
            >{link.label}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </header>

  <main>
    <section class="who-we-are">
      <div class="wwa-card">
        <h1>Who We Are</h1>
        <div class="photo-box wwa-photo">
          <img src={whoWeAreImg} alt="The UC Rocketry Club team" />
        </div>
      </div>

      <div class="irec-column">
        <h2>What is IREC?</h2>
        <div class="info-box">
          <p>{irecBlurb}</p>
        </div>
        <div class="info-box">
          <p>{teamBlurb}</p>
        </div>
      </div>
    </section>

    <section class="stats-section">
      <h2 class="stats-heading">Stats</h2>
      <div class="red-panel stats-panel">
        {#each stats as stat}
          <div class="stat-pill">
            {#if stat.value || stat.label}
              <span class="stat-value">{stat.value}</span>
              <span class="stat-label">{stat.label}</span>
            {/if}
          </div>
        {/each}
      </div>
      <div class="info-box extra-info-box">
        <p>{extraInfoBlurb}</p>
      </div>
    </section>

    <section class="meet-team-outline">
      <h2 class="meet-team-heading">Meet the Team!</h2>

      <div class="red-panel president-panel">
        <article class="member-card president-card">
          <div class="photo-box">
            <img src={president.photo} alt={president.name} />
          </div>
          <h3 class="member-role">{president.role}</h3>
          <div class="member-meta">
            <span class="member-name">{president.name}</span>
            <span class="member-contacts">
              {#each president.contacts as c, i}
                {#if i > 0}<span class="sep">|</span>{/if}
                <a href={c.href}>{c.label}</a>
              {/each}
            </span>
          </div>
        </article>
      </div>

      <div class="red-panel">
        <h3 class="panel-title">Executive Board</h3>
        <div class="member-row">
          {#each execBoard as member}
            <article class="member-card">
              <div class="photo-box">
                <img src={member.photo} alt={member.name} />
              </div>
              <h4 class="member-role">{member.role}</h4>
              <div class="member-meta">
                <span class="member-name">{member.name}</span>
                <span class="member-contacts">
                  {#each member.contacts as c, i}
                    {#if i > 0}<span class="sep">|</span>{/if}
                    <a href={c.href}>{c.label}</a>
                  {/each}
                </span>
              </div>
            </article>
          {/each}
        </div>
      </div>

      {#each subTeams as team}
        <div class="red-panel">
          <h3 class="panel-title">{team.title}</h3>
          <div class="member-row">
            <article class="member-card lead-card">
              <div class="photo-box lead-photo">
                <img src={team.lead.photo} alt={team.lead.name} />
              </div>
              <h4 class="member-role lead-label">{team.lead.role}</h4>
              <div class="member-meta">
                <span class="member-name">{team.lead.name}</span>
                <span class="member-contacts">
                  {#each team.lead.contacts as c, i}
                    {#if i > 0}<span class="sep">|</span>{/if}
                    <a href={c.href}>{c.label}</a>
                  {/each}
                </span>
              </div>
            </article>

            {#each team.members as member}
              <article class="member-card">
                <div class="photo-box">
                  <img src={member.photo} alt={member.name} />
                </div>
                <h4 class="member-role">{member.role}</h4>
                <div class="member-meta">
                  <span class="member-name">{member.name}</span>
                  <span class="member-contacts">
                    {#each member.contacts as c, i}
                      {#if i > 0}<span class="sep">|</span>{/if}
                      <a href={c.href}>{c.label}</a>
                    {/each}
                  </span>
                </div>
              </article>
            {/each}
          </div>
        </div>
      {/each}
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
    background: var(--charcoal-dark);
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
    max-width: 1200px;
    margin: 0 auto;
    padding: 2.5rem 2rem 0;
  }

  h1,
  h2,
  h3,
  h4 {
    font-family: 'Ubuntu Sans Mono', ui-monospace, monospace;
    font-weight: 700;
    margin: 0;
  }

  .photo-box {
    background: var(--off-white);
    border: 1px solid #b8b8b8;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .photo-box img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
  }

  .who-we-are {
    display: grid;
    grid-template-columns: 1fr 1.4fr;
    gap: 2rem;
    align-items: start;
  }

  .wwa-card {
    background: var(--accent-red);
    border-radius: 20px;
    padding: 1.5rem;
  }

  .wwa-card h1 {
    text-align: center;
    font-size: 1.9rem;
    color: var(--off-white);
    margin-bottom: 1.25rem;
  }

  .wwa-photo {
    aspect-ratio: 1 / 1.15;
  }

  .irec-column h2 {
    font-size: 1.4rem;
    margin-bottom: 1rem;
    color: var(--off-white);
  }

  .info-box {
    background: var(--off-white);
    color: #222;
    border: 1px solid #b8b8b8;
    border-radius: 4px;
    padding: 1.5rem;
    margin-bottom: 1.25rem;
    min-height: 9rem;
    display: flex;
    align-items: center;
  }

  .info-box p {
    margin: 0;
    line-height: 1.5;
  }

  @media (max-width: 900px) {
    .who-we-are {
      grid-template-columns: 1fr;
    }
  }

  .stats-section {
    margin-top: 3rem;
  }

  .stats-heading {
    text-align: right;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  .stats-panel {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 1.5rem;
    margin-bottom: 1.25rem;
  }

  .stat-pill {
    background: var(--off-white);
    border: 1px solid #b8b8b8;
    border-radius: 3rem;
    flex: 1 1 12rem;
    min-height: 8.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 1rem;
    color: #222;
  }

  .stat-value {
    font-size: 1.6rem;
    font-weight: 700;
  }

  .stat-label {
    font-size: 0.85rem;
    margin-top: 0.35rem;
  }

  .extra-info-box {
    min-height: 6rem;
    justify-content: center;
    text-align: center;
  }

  .meet-team-outline {
    margin-top: 3rem;
    border: 2px solid var(--off-white);
    border-radius: 16px;
    padding: 2rem;
  }

  .meet-team-heading {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 1.75rem;
  }

  .red-panel {
    background: var(--accent-red);
    border-radius: 12px;
    padding: 1.75rem;
    margin-bottom: 1.75rem;
  }

  .red-panel:last-child {
    margin-bottom: 0;
  }

  .panel-title {
    font-size: 1.3rem;
    margin-bottom: 1.25rem;
    color: var(--off-white);
  }

  .president-panel {
    display: flex;
    justify-content: center;
  }

  .member-row {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.75rem;
  }

  .member-card {
    background: var(--off-white);
    color: #222;
    border-radius: 4px;
    padding: 1rem 1rem 1.1rem;
    width: 12.5rem;
    flex-shrink: 0;
  }

  .president-card,
  .lead-card {
    width: 17rem;
  }

  .member-card .photo-box {
    width: 100%;
    aspect-ratio: 1 / 1;
    margin-bottom: 0.75rem;
    color: #444;
    font-size: 0.85rem;
  }

  .lead-photo {
    aspect-ratio: 1 / 1;
  }

  .member-role {
    font-size: 1.05rem;
    margin-bottom: 0.5rem;
  }

  .lead-label {
    font-size: 1.1rem;
  }

  .member-meta {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    border-left: 3px solid var(--accent-red);
    padding-left: 0.6rem;
    font-size: 0.85rem;
  }

  .member-name {
    font-weight: 700;
  }

  .member-contacts a {
    color: #222;
    text-decoration: none;
    font-weight: 700;
  }

  .member-contacts a:hover {
    color: var(--accent-red);
  }

  .sep {
    margin: 0 0.35rem;
    color: #888;
  }

  @media (max-width: 700px) {
    .member-row {
      justify-content: center;
    }
  }
</style>