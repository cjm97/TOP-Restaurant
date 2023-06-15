export default function aboutPage() {
  const container = document.getElementById('content'),
    aboutHeader = document.createElement('h1'),
    aboutInfo = document.createElement('p'),
    aboutContainer = document.createElement('div'),
    aboutInfoContainer = document.createElement('div');
  aboutContainer.classList.add('container', 'container__about');
  aboutInfoContainer.classList.add('info__container');
  aboutHeader.textContent = 'About';
  aboutInfo.textContent =
    "Coming soon to a location near you! Click on the 'Contact' tab for franchise enquiries!";
  container.appendChild(aboutContainer);
  aboutContainer.appendChild(aboutInfoContainer);
  aboutInfoContainer.appendChild(aboutHeader);
  aboutInfoContainer.appendChild(aboutInfo);
}
