<script>
  export let navigate;
  const base = import.meta.env.BASE_URL;
  import bgPattern from './assets/bg-lowpoly.svg';

  import logo from './assets/_logo.png';

  //2026
  import group2026 from './assets/2026/IMG_0150.png';
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
        'With intention to compete at IREC\u2019s 2026 competition, President and Lead Sophie Strawbrdige lead the capstone to enter in the COTS 10,000 ft class, similar to 2025. With sponsorship from Rhinegeist Brewery, the payload to be demonstrated was to determine the effects of germentaiton of wheat after a flight. ' +
        ' However, with lact of avaliable members for the competition, the group pulled out and instead continued through the project similarly to IREC, and launched their rocket locally at WSR.' +
        ' With an electronics malfunction, the final rocket CATOed and set an even higher standard of routine proceedures for the capstone moving forward.',
      president: makeMember('President & Team Lead', {
        name: 'Sophie Strawbridge',
        photo: SophieStrawbrdige,
        contacts: [
          { label: 'Email', href: 'mailto:strawbridge10@gmail.com' },
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/sophiestrawbridge/' }
        ]
      }),
      roles: [
        makeMember('Vice-President', {
        name: 'Nicholas Hann',
        photo: NickolasHann,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/nicholas-p-hann/' }
        ]
      }),
        makeMember('Secretary' , {
        name: 'Korianna Rosenthal',
        photo: KoriannaRosenthal,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/koriannarosenthal/' }
        ]
      }),
        makeMember('Treasurer', {
        name: 'Dhyan Patel',
        photo: DhyanPat,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pateldhyan/' }
        ]
      }),
        makeMember('Saftey Officer', {
        name: 'Madison Detherage',
        photo: MadisonDetherage,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/madison-detherage/' }
        ]
      }),
        makeMember('Launch Vehicle Lead' , {
        name: 'Matthew Cromwell',
        photo: Matthew_Cromwell,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/matthewcromwell/' }
        ]
      }),
        makeMember('Payload Lead', {
        name: 'Connor Haar',
        photo: ConnorHaar,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/connorhaar/' }
        ]
      }),
      ]
    },
    {
        //CLASS OF 2025 CAPSTONE ROLES
      year: '2024-2025',
      historyImage: group2025,
      historyText:
        'The capstone class of 2025 was the first to prove themselves and compete at the new IREC competition under the leadership of Pierce Elliot. Similar to all other given years, they competed in the COTS 10,000ft class with their sights set on winning the overall competiton. The flight included live video streaming with audio as well as an experiment in the payload to determine the amount of cells in several forms of yeast post flight.' +
        'At the Spring CEAS Expo, the team was able to win first place for the College of Engineering and Applied Sciences! As an overall, the team placed 22nd in the COTS category and 35th overall. Their rocket narrowly passed their goal threshold of 10,000 ft at a total of 10,245 ft. This was likely overshot to OpenRocket estimations rather than other applications such as RocketPy, and set a wonderful standard for the 2026 year to beat!',
      president: makeMember('Project Manager', {
        name: 'Pierce Elliot',
        photo: PierceElliot,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/pierce-elliott-d/' }
        ]
      }),
      roles: [
        makeMember('Launch Vehicle Lead' , {
        name: 'Ben Hunt',
        photo: BenHunt,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ben-hunt-7526a0216/' }
        ]
      }),
        makeMember('Payload Lead' ,  {
        name: 'Matt Boller',
        photo: MattBoller,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/mattboller1/' }
        ]
      }),
        makeMember('Avionics' , {
        name: 'Derrick Hollins',
        photo: DerekHollins,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/derrickhollins/' }
        ]
      }),
        makeMember('Payload Structure', {
        name: 'Alex Ravagnani',
        photo: AlexRavagani,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alexander-rav/' }
        ]
      }),
        makeMember('LV Structures & Sim', {
        name: 'Christian Dierksheide',
        photo: ChristianDierksheide,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/christian-dierksheide/' }
        ]
      }),
        makeMember('Payload Electronics', {
        name: 'Jeff Harper',
        photo: JefferyHarper,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/jeffrey-harper-892354207/' }
        ]
      }),
        makeMember('LV Structures & Sim' , {
        name: 'Collin Gerwe',
        photo: CollinGerwe,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/collingerwe2002/' }
        ]
      }),
        makeMember('LV Build', {
        name: 'Zak Upson',
        photo: ZakUpson,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/zak-upson/' }
        ]
      }),
      ]
    },
    {
      year: '2023-2024',
      historyImage: group2024,
      historyText:
        'The class of 2024 participated in the Students for Exploration and Development of Space (SEDS) in the Spaceport Cup of America, now IREC, under leadership and guidance of Ethan McCowan. The group competed flying a COTS motor to 10,000 ft carrying an 8.8 lb payload.' +
        'Local tests of their rocket placed them overshooting their target apogee by ~500ft at 10,497 feet. Their payload end up weighing around 10.05 lbs and ejects separately to the main and drouge parachutes around 0.5 seconds of hitting apogee. ',
      president: makeMember('Team Lead' , {
        name: 'Ethan McCowan',
        photo: EthanMcCowan,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/ethan-mccowan/' }
        ]
      }),
      roles: [
        makeMember('Payload Lead', {
        name: 'Kyle Brown',
        photo: KyleBrown,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/kyl3br0wn/' }
        ]
      }),
        makeMember('Avionics Lead', {
        name: 'SethPlantz',
        photo: SethPlantz,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/seth-plantz-0a79951a2/' }
        ]
      }),
        makeMember('Structures Member', {
        name: 'Harrison Stoelting',
        photo: HarrisonStoelting,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/harrison-stoelting/' }
        ]
      }),
        makeMember('Structures Member', {
        name: 'Alex Hulteen',
        photo: AlexHulteen,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/alex-hulteen-28a021202/' }
        ]
      }),
        makeMember('Structures Member', {
        name: 'Grant Miller',
        photo: GrantMiller,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/grant-miller-hsp/' }
        ]
      }),
        makeMember('Payload Member', {
        name: 'Carson Billy',
        photo: CarsonBilly,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/carsonbilly/' }
        ]
      }),
      makeMember('Payload Member', {
        name: 'Anders Setty',
        photo: AndersSetty,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/anders-setty/' }
        ]
      }),
      makeMember('Payload Member', {
        name: 'Evan Krentx',
        photo: EvanKrentz,
        contacts: [
          { label: 'LinkedIn', href: 'https://www.linkedin.com/in/evan-krentz/' }
        ]
      }),
      ]
    }
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
    gap: 1.35rem;
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
    width: 25rem;
  }

  .president-card .photo-box {
    width: 100%;
    aspect-ratio: 1 / 1;
    margin-bottom: 0.75rem;
  }

  .role-grid {
    flex: 1 1 auto;
    display: grid;
    grid-template-columns: repeat(3, minmax(10.5rem, 8.5rem));
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