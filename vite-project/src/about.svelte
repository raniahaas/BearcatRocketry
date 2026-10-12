<script>
  export let navigate;
  const base = import.meta.env.BASE_URL;

  import logo from './assets/_logo.png';
  import bgPattern from './assets/bg-lowpoly.svg';


  import whoWeAreImg from './assets/2025/IMG_3773.jpeg';

  import raniaHaas from './assets/2027/headshots/haasRania.jpeg';
  import raniaHaas2 from './assets/2027/headshots/raniaHaas2.jpeg';
  import stefaniVinny from './assets/2027/headshots/stefaniVinny.jpg'
  import landryDanielson from './assets/2027/headshots/DanielsonLandry.png';
  import danielHerzog from './assets/2027/headshots/herzogDaniel.jpeg';
  import willJackson from './assets/2027/headshots/jacksonWilliam.jpeg';
  import allaynaBackowski from './assets/2027/headshots/backowskiAllayna.jpeg';
  import rossScully from './assets/2027/headshots/scullyRoss.jpeg';
  import graysonRazavi from './assets/2027/headshots/razaviGrayson.png';
  import aidanBeachler from './assets/2027/headshots/beachlerAidan.jpeg';
  import aidanEliason from './assets/2027/headshots/eliasonAidan.png';

  
  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'History', path: '/history' },
    { label: 'Sponsorship', path: '/sponsorship' },
    { label: 'Contact', path: '/contact' }
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

  // Stats
  const numbers = [
    { value: '5', label: 'YEARS OF IREC' },
    { value: '40+', label: 'STUDENTS' },
    { value: '3', label: 'SUB-TEAMS' },
    { value: '10+', label: 'PARTNERS' }
  ];



  //President
  const president = {
    
  };

  //Exec Board, excluding president
  const execBoard = {
    title: 'Executive Board',
    lead: {
      role: 'President',
      name: 'Landry Danielson',
      photo: landryDanielson,
      contacts: [
        { label: '| Contact', href: 'mailto:daniell9@mail.uc.edu' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/landry-danielson/' }
      ]
    },
    members: [
      {
      role: 'Treasurer',
      name: 'Daniel Herzog',
      photo: danielHerzog,
      contacts: [
        { label: '| Contact', href: 'mailto:herzogdm@mail.uc.edu' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-herzog02/' }
      ]
      },{
        role: 'Secretary',
        name: 'Rania Haas',
        photo: raniaHaas,
        contacts: [
          { label: '| Contact', href: 'mailto:haasr3@mail.uc.edu' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/rania-haas/' }
        ]
      }
    ]
  };

  //Launch Vechile Members
  const launchVehicleTeam = {
    title: 'Launch Vehicle',
    lead: {
      role: 'Launch Vehicle Lead',
      name: 'Will Jackson',
      photo: willJackson,
      contacts: [
        { label: '| Contact', href: 'mailto:jacksow9@mail.uc.edu' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/william-tjackson/' }
      ]
    },
    members: [
      {
        role: 'Launch Vehicle Member',
        name: 'Vinny Stefani',
        photo: stefaniVinny,
        contacts: [
          { label: '| Contact', href: 'www.linkedin.com/in/vincentastefani' },
        ]
      },
      {
        role: 'Launch Vehicle Member',
        name: 'Allayna Backowski',
        photo: allaynaBackowski,
        contacts: [
          { label: '| Contact', href: 'https://www.linkedin.com/in/allayna-backowski-85302a251/' }
        ]
      },
      {
        role: 'Launch Vehicle Member',
        name: 'Ross Scully',
        photo: rossScully,
        contacts: [
          { label: '| Contact', href: 'https://www.linkedin.com/in/ross-scully-932632253/' }
        ]
      },
      {
        role: 'Launch Vehicle Member',
        name: 'Grayson Razavi',
        photo: graysonRazavi,
        contacts: [
          { label: '| Contact', href: 'https://www.linkedin.com/in/grayson-reza-razavi/' }
        ]
      }
    ]
  };

  const payloadTeam = {
    title: 'Payload',
    lead: {
      role: 'Payload Lead',
      name: 'Aidan Beachler',
      photo: aidanBeachler,
      contacts: [
        { label: '| Contact', href: 'mailto:beachlan@mail.uc.edu' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/aidan-beachler/' }
      ]
    },
    members: [
      {
        role: 'Payload Member',
        name: 'Rania Haas',
        photo: raniaHaas2,
        contacts: [
          { label: '| Contact', href: 'https://www.linkedin.com/in/rania-haas/' }
        ]
      },
      {
        role: 'Payload Member',
        name: 'Aidan Eliason',
        photo: aidanEliason,
        contacts: [
          { label: '| Contact', href: 'https://www.linkedin.com/in/aidaneliason/' }
        ]
      },
    ]
  };

  const subTeams = [execBoard, launchVehicleTeam, payloadTeam];
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

    <!-- In Numbers -->
    <section class="numbers">
      <h2>In Numbers</h2>
      <div class="numbers-row">
        {#each numbers as n}
          <div class="number">
            <span class="number-value">{n.value}</span>
            <span class="number-label">{n.label}</span>
          </div>
        {/each}
      </div>
    </section>

    <section class="meet-team-outline">
      <h2 class="meet-team-heading">Meet the Team!</h2>



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

  /* ---------- Header (matches Home.svelte) ---------- */
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

  .numbers {
    background: var(--charcoal);
    color: var(--off-white);
    text-align: center;
    padding: 5rem 2rem;
    margin-top: 2rem;
  }

  .numbers h2 {
    color: var(--off-white);
    margin-bottom: 2.5rem;
    font-size: 2.5rem;
  }

  .numbers-row {
    max-width: 1100px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 2rem;
  }

  .number {
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
  }

  .number-value {
    font-size: clamp(2.5rem, 6vw, 4rem);
    font-weight: 700;
    color: var(--accent-red);
    line-height: 1;
  }

  .number-label {
    letter-spacing: 0.12em;
    font-size: 0.85rem;
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
    .numbers-row {
      grid-template-columns: repeat(2, 1fr);
    }
  }

  main {
    position: relative;
    z-index: 1;
    max-width: 1800px;
    margin: 0 auto;
    padding: 2.5rem 1.5rem 0;
  }

  h1,
  h2,
  h3,
  h4 {
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

  /* ---------- Who We Are ---------- */
  .who-we-are {
    display: grid;
    grid-template-columns: 1fr 1.6fr;
    gap: 2rem;
    align-items: stretch;
    /* fill the first screen under the sticky header, like the wireframe */
    min-height: calc(100vh - 10rem);
  }

  .wwa-card {
    background: var(--accent-red);
    border-radius: 20px;
    padding: 1.5rem;
    display: flex;
    flex-direction: column;
  }

  .wwa-card h1 {
    text-align: center;
    font-size: 1.9rem;
    color: var(--off-white);
    margin-bottom: 1.25rem;
  }

  .wwa-photo {
    flex: 1 1 auto;
    min-height: 24rem;
  }

  .irec-column {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
  }

  .irec-column h2 {
    font-size: 1.4rem;
    color: var(--off-white);
  }

  .irec-column .info-box {
    flex: 1 1 0;
    margin-bottom: 0;
    justify-content: center;
    text-align: center;
    font-size: 1.05rem;
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

  

  /* ---------- Meet the Team outer container ---------- */
  .meet-team-heading {
    text-align: center;
    font-size: 1.8rem;
    margin-bottom: 1.75rem;
    margin-top: 1.75rem;
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
    font-size: 2.0 rem;
    margin-bottom: 1.1rem;
    color: var(--off-white);
  }

  .member-role {
    font-size: 1.05rem;
    margin-bottom: 0.5rem;
  }

  .lead-label {
    font-size: 1.1rem;
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

.member-row {
  display: grid;
  grid-template-columns: repeat(5, minmax(1rem, 1fr));
  justify-items: center;
  align-items: start;
  gap: -2.0rem;
}

/*Cards */

.member-card {
  background: var(--off-white);
  color: #222;
  border-radius: 6px;
  padding: 1rem;
  width: 100%;
  max-width: 16rem;
  box-shadow: 0 2px 6px rgba(0,0,0,0.25);
}

.lead-card {
  max-width: 23rem;
}

.member-card .photo-box,
.lead-card .photo-box {
  width: 100%;
  aspect-ratio: 1 / 1;
  margin-bottom: 0.75rem;
  border-radius: 6px;
}


.member-role {
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 0.4rem;
}

.lead-label {
  font-size: 1.15rem;
}

.member-meta {
  border-left: 3px solid var(--accent-red);
  padding-left: 0.6rem;
  margin-top: 0.4rem;
  font-size: 0.85rem;
}

.red-panel {
  padding: 2rem;
  margin-bottom: 2.5rem;
}

@media (max-width: 900px) {
  .member-row {
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
  }
}

@media (max-width: 600px) {
  .member-row {
    grid-template-columns: repeat(auto-fit, minmax(9rem, 1fr));
  }
}


</style>