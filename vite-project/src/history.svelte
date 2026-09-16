<script>
  export let navigate;
  const base = import.meta.env.BASE_URL;

  import logo from './assets/_logo.png';

  //2026
  import group2026 from './assets/2026/image-20260426-185043-4a1e326e.jpeg';
  import SophieStrawbrdige from './assets/2026/headshots/Sophie_Strawbridge_Headshot.png';
  import NickolasHann from './assets/2026/headshots/Nicholas_Hann_Headshot.jpg';
  import Matthew_Cromwell from './assets/2026/headshots/Matthew_Cromwell_Headshot.jpg';
  import MadisonDetherage from './assets/2026/headshots/Madison_detherage_headshot.jpg';
  import KoriannaRosenthal from './assets/2026/headshots/Korianna_Rosenthal_Headshot.jpeg';
  import DhyanPat from './assets/2026/headshots/DhyanPatel_Headshot.jpg';
  import ConnorHaar from './assets/2026/headshots/ConnorHaar_Headshot.jpg';

  //2025
  import group2025 from './assets/2025/2025_9.jpg';
  import AlexRavagani from './assets/2025/headshots/Alex_Ravagnani_Headshot.jpg';
  import BenHunt from './assets/2025/headshots/Ben Hunt Headshot.jpg';
  import MattBoller from './assets/2025/headshots/Boller-Matt-square.jpg';
  import ChristianDierksheide from './assets/2025/headshots/christian.png';
  import CollinGerwe from './assets/2025/headshots/collin_gerwe_headshot.jpeg';
  import DerekHollins from './assets/2025/headshots/Derrick_Hollins_New_Photo.jpeg';
  import JefferyHarper from './assets/2025/headshots/Harper_Headshot.jpg';
  import MelissaKuehnle from './assets/2025/headshots/Melissa_Kuehnle_Headshot.jpg';
  import PierceElliot from './assets/2025/headshots/Pierce_Elliott.jpg';
  import ZakUpson from './assets/2025/headshots/ZakUpsonHeadshot.jpeg';
  
  //2024
  import group2024 from './assets/2024/2024_1.jpg';
  import AlexHulteen from './assets/2024/headshots/Alex Hulteen.jpg';
  import AndersSetty from './assets/2024/headshots/AndersSetty.jpg';
  import CarsonBilly from './assets/2024/headshots/Carson Billy.jpg';
  import EthanMcCowan from './assets/2024/headshots/EthanMcCowan.jpg';
  import EvanKrentz from './assets/2024/headshots/Evan Krentz.jpg';
  import GrantMiller from './assets/2024/headshots/GrantMiller.jpg';
  import HarrisonStoelting from './assets/2024/headshots/HarrisonStoelting.jpg';
  import KyleBrown from './assets/2024/headshots/KyleBrown.jpg';
  import SethPlantz from './assets/2024/headshots/Seth Plantz.jpg';

  import historyImg2025 from './assets/2025/2025_10.jpg';
  import historyImg2024 from './assets/2024/2024_5.jpg';
  import historyImg2023 from './assets/2026/image-20260426-185043-4a1e326e.jpeg';


  const navLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'History', path: '/history' },
    { label: 'Sponsorship', path: '/sponsorship' },
    { label: 'Contact', path: '/contact' }
  ];

  /**
   * @param {string} role
   * @param {{
   *   name?: string,
   *   photo?: string,
   *   contacts?: { label: string, href: string }[]
   * }} [options]
   */
  function makeMember(role, options = {}) {
    const {
      name = 'First Last',
      photo = placeholderPhoto,
      contacts = [
        { label: 'Contact', href: '#' },
        { label: 'Contact', href: '#' }
      ]
    } = options;
    return { role, name, photo, contacts };
  }

  const historyYears = [
    {
        //CLASS of 2026 CAPSTONE ROLES
      year: '2025-2026',
      historyImage: group2026,
      historyText:
        'Information on the club\u2019s 2025-2026 season goes here — competitions attended, ' +
        'the rocket built, and any milestones or results worth calling out.',
      president: makeMember('President & Team Lead', {
        name: 'Sophie Strawbridge',
        photo: SophieStrawbrdige,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
      roles: [
        makeMember('Vice-President', {
        name: 'Nicholas Hanh',
        photo: NickolasHann,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
        makeMember('Secretary' , {
        name: 'Korianna Rosenthal',
        photo: KoriannaRosenthal,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
        makeMember('Treasurer', {
        name: 'Dhyan Patel',
        photo: DhyanPat,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
        makeMember('Saftey Officer', {
        name: 'Madison Detherage',
        photo: MadisonDetherage,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
        makeMember('Launch Vehicle Lead' , {
        name: 'Matthew Cromwell',
        photo: Matthew_Cromwell,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
        makeMember('Payload Lead', {
        name: 'Connor Haar',
        photo: ConnorHaar,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
      ]
    },
    {
        //CLASS OF 2025 CAPSTONE ROLES
      year: '2024-2025',
      historyImage: group2025,
      historyText:
        '2024 IREC description, ' +
        'cont.',
      president: makeMember('Project Manager', {
        name: 'Piearce Elliot',
        photo: PierceElliot,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
      roles: [
        makeMember('Launch Vehicle Lead' , {
        name: 'Ben Hunt',
        photo: BenHunt,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
        makeMember('Payload Lead' ,  {
        name: 'Matt Boller',
        photo: MattBoller,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
        makeMember('Avionics' , {
        name: 'Derrick Hollins',
        photo: DerekHollins,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
        makeMember('Payload Structure', {
        name: 'Alex Ravagnani',
        photo: AlexRavagani,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
        makeMember('LV Structures & Sim', {
        name: 'Christian Dierksheide',
        photo: ChristianDierksheide,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
        makeMember('Payload Electronics', {
        name: 'Jeff Harper',
        photo: JefferyHarper,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
        makeMember('LV Structures & Sim' , {
        name: 'Collin Gerwe',
        photo: CollinGerwe,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
        makeMember('LV Build', {
        name: 'Zak Upton',
        photo: ZakUpson,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
      ]
    },
    {
      year: '2023-2024',
      historyImage: group2024,
      historyText:
        'Information on the club\u2019s 2023-2024 season goes here — competitions attended, ' +
        'the rocket built, and any milestones or results worth calling out.',
      president: makeMember('Team Lead' , {
        name: 'Ethan McCowan',
        photo: EthanMcCowan,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
      roles: [
        makeMember('Payload Lead', {
        name: 'Kyle Brown',
        photo: KyleBrown,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
        makeMember('Avionics Lead', {
        name: 'SethPlantz',
        photo: SethPlantz,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
        makeMember('Structures Member', {
        name: 'Harrison Stoelting',
        photo: HarrisonStoelting,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
        makeMember('Structures Member', {
        name: 'Alex Hulteen',
        photo: AlexHulteen,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
        makeMember('Structures Member', {
        name: 'Grant Miller',
        photo: GrantMiller,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
        makeMember('Payload Member', {
        name: 'Carson Billy',
        photo: CarsonBilly,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
      makeMember('Payload Member', {
        name: 'Anders Setty',
        photo: AndersSetty,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
      makeMember('Payload Member', {
        name: 'Evan Krentx',
        photo: EvanKrentz,
        contacts: [
          { label: 'Email', href: 'mailto:president@ucrocketry.org' },
          { label: 'LinkedIn', href: 'https://linkedin.com/in/janedoe' }
        ]
      }),
      ]
    }
  ];
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
              class:current={link.label === 'History'}
              on:click|preventDefault={() => navigate(link.path)}
            >{link.label}</a>
          </li>
        {/each}
      </ul>
    </nav>
  </header>

  <main>
    {#each historyYears as yr, i}
      <section class="year-block" class:reversed={i % 2 === 1}>
        <div class="red-panel history-panel">
          <h2 class="year-label">{yr.year}</h2>
          <div class="history-content">
            <div class="info-box history-text">
              <p>{yr.historyText}</p>
            </div>
            <div class="photo-box history-photo">
              <img src={yr.historyImage} alt={`${yr.year} team or rocket`} />
            </div>
          </div>
        </div>

        <div class="red-panel team-panel">
          <h3 class="panel-title">{yr.year} Team</h3>
          <div class="team-content">
            <article class="member-card president-card">
              <div class="photo-box">
                <img src={yr.president.photo} alt={yr.president.name} />
              </div>
              <h4 class="member-role">{yr.president.role}</h4>
              <div class="member-meta">
                <span class="member-name">{yr.president.name}</span>
                {#if yr.president.contacts.length}
                  <span class="member-contacts">
                    {#each yr.president.contacts as c, ci}
                      {#if ci > 0}<span class="sep">|</span>{/if}
                      <a href={c.href}>{c.label}</a>
                    {/each}
                  </span>
                {/if}
              </div>
            </article>

            <div class="role-grid">
              {#each yr.roles as member}
                <article class="member-card role-card">
                  <div class="photo-box">
                    <img src={member.photo} alt={member.name} />
                  </div>
                  <h4 class="member-role">{member.role}</h4>
                  <div class="member-meta">
                    <span class="member-name">{member.name}</span>
                    {#if member.contacts.length}
                      <span class="member-contacts">
                        {#each member.contacts as c, ci}
                          {#if ci > 0}<span class="sep">|</span>{/if}
                          <a href={c.href}>{c.label}</a>
                        {/each}
                      </span>
                    {/if}
                  </div>
                </article>
              {/each}
            </div>
          </div>
        </div>
      </section>
    {/each}
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

  .info-box {
    background: var(--off-white);
    color: #222;
    border: 1px solid #b8b8b8;
    border-radius: 4px;
    padding: 1.5rem;
    display: flex;
    align-items: center;
  }

  .info-box p {
    margin: 0;
    line-height: 1.5;
  }

  .red-panel {
    background: var(--accent-red);
    border-radius: 12px;
    padding: 1.75rem;
  }

  .panel-title {
    font-size: 1.3rem;
    margin-bottom: 1.25rem;
    color: var(--off-white);
  }

  .year-block {
    margin-bottom: 3rem;
  }

  .year-block:last-child {
    margin-bottom: 0;
  }

  .history-panel {
    margin-bottom: 1.75rem;
  }

  .year-label {
    font-size: 1.5rem;
    color: var(--off-white);
    margin-bottom: 1.25rem;
  }

  .history-content {
    display: flex;
    gap: 1.75rem;
    align-items: stretch;
  }

  .history-text,
  .history-photo {
    flex: 1 1 0;
    min-height: 14rem;
  }

  .reversed .history-content,
  .reversed .team-content {
    flex-direction: row-reverse;
  }

  .team-content {
    display: flex;
    gap: 1.75rem;
    align-items: flex-start;
    flex-wrap: wrap;
  }

  .member-card {
    background: var(--off-white);
    color: #222;
    border-radius: 4px;
    padding: 1rem 1rem 1.1rem;
    flex-shrink: 0;
  }

  .president-card {
    width: 19rem;
  }

  .president-card .photo-box {
    width: 100%;
    aspect-ratio: 1 / 1;
    margin-bottom: 0.75rem;
  }

  .role-grid {
    flex: 1 1 auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(6.5rem, 8.5rem));
    gap: 1.25rem 1.75rem;
  }

  .role-card {
    width: auto;
    padding: 0.7rem 0.7rem 0.8rem;
  }

  .role-card .photo-box {
    width: 100%;
    aspect-ratio: 1 / 1;
    margin-bottom: 0.5rem;
  }

  .member-role {
    font-size: 0.85rem;
    margin-bottom: 0.35rem;
  }

  .president-card .member-role {
    font-size: 1.2rem;
    margin-bottom: 0.5rem;
  }

  .role-card .member-meta {
    font-size: 0.72rem;
  }

  .member-meta {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    border-left: 3px solid var(--accent-red);
    padding-left: 0.6rem;
    font-size: 0.8rem;
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

  @media (max-width: 900px) {
    .history-content,
    .reversed .history-content,
    .team-content,
    .reversed .team-content {
      flex-direction: column;
    }
    .role-grid {
      grid-template-columns: repeat(2, 1fr);
      width: 100%;
    }
  }
</style>