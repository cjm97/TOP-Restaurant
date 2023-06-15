export default function pageLoad() {
  let navHeadings = ['Home', 'About', 'Contact'];
  const content = document.getElementById('content'),
    main = document.createElement('main'),
    nav = document.createElement('nav'),
    navLogo = document.createElement('h2'),
    navLogoLink = document.createElement('a'),
    ul = document.createElement('ul'),
    img = document.createElement('img'),
    restaurantHeader = document.createElement('h1'),
    heroContainer = document.createElement('div'),
    heroInfoContainer = document.createElement('div'),
    heroInfoHeader = document.createElement('h2'),
    heroInfoDescription = document.createElement('p');

  navLogoLink.textContent = 'Sampa';
  heroInfoHeader.textContent = 'Best Pizza in Sydney';
  restaurantHeader.textContent = 'Sampa';
  restaurantHeader.classList.add('hero__header', 'company__logo');
  heroContainer.classList.add('container', 'container__main');
  heroInfoContainer.classList.add('info__container');
  navLogoLink.classList.add('nav__logo--link', 'company__logo');
  nav.classList.add('nav__bar');
  heroInfoDescription.textContent =
    'Made with quality ingredients and a burning passion';

  content.appendChild(nav);
  nav.appendChild(navLogo);
  navLogo.appendChild(navLogoLink);
  navLogoLink.href = '#home';
  nav.appendChild(ul);
  navHeadings.forEach((heading) => {
    const li = document.createElement('li');
    const a = document.createElement('a');
    ul.appendChild(li);
    li.appendChild(a);
    a.classList.add('nav-link');
    a.textContent = heading;
    a.addEventListener('click', () => {
      handleLink(heading);
    });
  });
  content.appendChild(restaurantHeader);
  content.appendChild(heroContainer);
  heroContainer.appendChild(heroInfoContainer);
  heroInfoContainer.appendChild(heroInfoHeader);
  heroInfoContainer.appendChild(heroInfoDescription);
}

function handleLink(heading) {
  const aboutContainer = document.querySelector('.container__about');
  const contactContainer = document.querySelector('.container__contact');
  const homeContainer = document.querySelector('.container__main');
  console.log(aboutContainer);
  console.log(contactContainer);
  console.log(homeContainer);

  if (heading === 'About') {
    aboutContainer.style.display = 'flex';
    contactContainer.style.display = 'none';
    homeContainer.style.display = 'none';
  }
  if (heading === 'Contact') {
    aboutContainer.style.display = 'none';
    contactContainer.style.display = 'flex';
    homeContainer.style.display = 'none';
  }
  if (heading === 'Home') {
    aboutContainer.style.display = 'none';
    contactContainer.style.display = 'none';
    homeContainer.style.display = 'flex';
  }
}
